import { PlanningExamensService } from 'src/app/admin/services/planning-examens.service';
import { SessionExamenService } from 'src/app/admin/services/session-examen.service';
import { ExamenService } from 'src/app/admin/services/examen.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import countries from 'src/app/countries.json';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/admin/services/categorie.service';
import {en_US, fr_FR, NzI18nService } from 'ng-zorro-antd/i18n';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
@Component({
  selector: 'app-edit-session-examen',
  templateUrl: './edit-session-examen.component.html',
  styleUrls: ['./edit-session-examen.component.css']
})
export class EditSessionExamenComponent implements OnInit {
  SessionForm: FormGroup;
  submitted = false;
  cours = [];
  sessionEmail = [];
  id;
  newDateDebut: any;
  Result;
  year: any;
  month: any;
  day: any;
  a: any;
  //
  displayRef = false;
  displayVersion = false;
  displayCountry = false;
  allCours = [];
  filtercours = [];
  categories = [];
  versions = [];
  filtcategorie = [];
  plannigBySession = [];
  dateTodayVerif;
  today = new Date();
  title = 'json-file-read-angular';
  isLoading = false;
  public countryList: {name: string }[] = countries;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private examenService: ExamenService,
    private sessionExamenService: SessionExamenService,
    private route: ActivatedRoute,
    private categorieService: CategorieService,
    private planningExamenService: PlanningExamensService,
    private i18n: NzI18nService
  ) { }

   ngOnInit(): void {
    this.i18n.setLocale(en_US);
    const current = new Date();
    this.dateTodayVerif = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');
    this.fetchCategorie();
    this.fetchAllCours();
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchSessionWithEmail(this.id);
    this.sessionExamenService.getSessionById(this.id).subscribe( async (resp: any) => {
      this.Result = resp.result[0];
      this.defautfetchCours();
      this.defautversion();
      this.SessionForm.patchValue({
        cat_formation: this.Result.categorie,
        ref_formation: this.Result.ref_formation,
        version_session: this.Result.version_session,
        date_debut: this.Result.date_examen,
        langue: this.Result.langue,
        lieu: this.Result.lieu,
        etat_session: this.Result.etat_session
      });
    });
    this.SessionForm = this.formBuilder.group({
      cat_formation: ['', [Validators.required]],
      ref_formation: ['', [Validators.required]],
      date_debut: ['', [Validators.required]],
      version_session: ['', ],
      langue: ['', [Validators.required]],
      lieu: ['', [Validators.required]],
      etat_session: ['en attente de confirmation', [Validators.required]]
    });
  }

   // convenience getter for easy access to form fields
   get f()
    { return this.SessionForm.controls; }

   onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.SessionForm.invalid) {
        return;
    }
    this.isLoading = true;
    const valueDateDebut = moment(this.SessionForm.value.date_debut).format('YYYY-MM-DD HH:mm:ss');
    let  filterIdCour = [];
    if (this.versions[0].version !== null && this.versions[0].version !== '') {
       filterIdCour = this.allCours.filter(idcour => {
        return idcour.ref_form === this.SessionForm.value.ref_formation && idcour.version === this.SessionForm.value.version_session;
      });
    } else {
       filterIdCour = this.allCours.filter(idcour => {
        return idcour.ref_form === this.SessionForm.value.ref_formation ;
      });
    }
    const session = {
      id_examen: filterIdCour[0].id,
      date_examen: valueDateDebut,
      langue: this.SessionForm.value.langue,
      lieu: this.SessionForm.value.lieu || null,
      etat_session: this.SessionForm.value.etat_session
    };
    const dateEx = filterIdCour[0].duree.split(':');
    const heure_d = dateEx[0];
    const minute_d = dateEx[1];
    let date_f =  moment(session.date_examen).add(heure_d, 'hours');
    date_f =  moment(date_f).add(minute_d, 'minute');
    const dateExam = moment(session.date_examen, 'DD-MM-YYYY HH:mm:ss');
    const heure_debut = dateExam.format('HH:mm');
    const heure_fin = date_f.format('HH:mm');
    const heure_session = heure_debut + ' à ' + heure_fin;
    this.sessionExamenService.updateSession(this.id, session).subscribe( async (resp: any) => {
        if (!resp.success) {
          this.toastr.error('Erreur', resp.error);
          this.isLoading = false;
        } else {
          if (this.sessionEmail[0].email && session.etat_session !== 'en cours' && session.etat_session !== 'clôturée' ) {
            if (this.versions[0].version !== null && this.versions[0].version !== '') {
              // rien
            } else {
              this.SessionForm.value.version_session = null;
            }
            if (session.etat_session === 'annulée' || session.etat_session === 'reportée') {
              this.plannigBySession[0].statut_f = 'Annulée';
            }
            if (session.etat_session === 'confirmée') {
              this.plannigBySession[0].statut_f = 'Confirmée';
            }
            const resuls = await this.envoyerEmail(this.sessionEmail[0].email, this.SessionForm.value.ref_formation,
                 moment(session.date_examen).format('DD-MM-YYYY'), heure_session,
               session.langue, this.SessionForm.value.version_session, this.plannigBySession[0].statut_f, session.etat_session,
              this.sessionEmail[0].name, filterIdCour[0].designation, session.lieu, this.plannigBySession[0].nbr_participant);

          }
          if (this.sessionEmail[0].email && session.etat_session !== 'en cours' && session.etat_session !== 'clôturée' &&
           session.etat_session !== 'confirmée' && session.etat_session !== 'en attente de confirmation') {
             const p = {
               id: this.plannigBySession[0].id,
               statut_f: 'annulée'
             };

             this.planningExamenService.editPlanningForSession(p).subscribe((d: any) => {
              if (!d.success) {
                this.toastr.error('Erreur', d.error);
              }});
          }
          if (this.sessionEmail[0].email && session.etat_session === 'confirmée') {
             const pl = {
               id: this.plannigBySession[0].id,
               statut_f: 'Confirmée'
             };
             this.planningExamenService.editPlanningForSession(pl).subscribe((d: any) => {
              if (!d.success) {
                this.toastr.error('Erreur', d.error);
              }});
          }
          this.toastr.success('Succès');
          this.router.navigate(['/admin/list-session-cours-examen/session-examen/list-examen']);
        }
      });
  }
   fetchAllCours(){
    this.examenService.getAllCours().subscribe((resp: any) => {
      this.allCours = resp.results;
    });
   }
   defautfetchCours() {
    this.examenService.getAllDistinctCours().subscribe((data: any) => {
      this.cours = data.result;
      this.filtercours = this.cours.filter((cour: any) => {
        return cour.categorie === this.Result.categorie;
      });
    });
 }
   fetchSessionWithEmail(id) {
    this.sessionExamenService.getSessionWithEmailById(id).subscribe((data: any) => {
      this.sessionEmail = data.result;
    });
    this.planningExamenService.getPlanningUpdatedByIdSession(this.id).subscribe( (resp: any) => {
      this.plannigBySession = resp.result;
  });
   }
   fetchCategorie(){
    this.categorieService.getAllCategories().subscribe((data: any) => {
      this.categories = data.results;
    });
   }
   onchange(e){
     if (e) {
      this.submitted = false;
      this.displayVersion = false;
      this.SessionForm.patchValue({
        ref_formation: '',
        version_session: '',
      });
      this.filtercours = [];
      this.filtercours = this.cours.filter((cour: any) => {
        return cour.categorie === this.SessionForm.value.cat_formation;
      });
     }
  }
  changeRef(e){
    if (e && this.SessionForm.value.ref_formation) {
      this.submitted = false;
      this.versions = [];
      this.SessionForm.patchValue({
        version_session: '',
      });
      this.examenService.getAllVersionByRef(this.SessionForm.value.ref_formation).subscribe((resp: any) => {
        this.versions = resp.result;
        if (this.versions[0].version !== null && this.versions[0].version !== '') {
          this.displayVersion = true;
          this.SessionForm.get('version_session').setValidators(Validators.required);
        } else {
          this.SessionForm.get('version_session').clearValidators();
          this.displayVersion = false;
        }
      });
    }

  }
  defautversion(){
    this.versions = [];
    this.examenService.getAllVersionByRef(this.Result.ref_formation).subscribe((resp: any) => {
      this.versions = resp.result;
      if (this.versions[0].version !== null && this.versions[0].version !== '') {
        this.displayVersion = true;
        this.SessionForm.get('version_session').setValidators(Validators.required);
      } else {
        this.SessionForm.get('version_session').clearValidators();
        this.displayVersion = false;
      }
    });
  }
  envoyerEmail(email, ref, dated, heure, langue, version, etat , etatsession,
    namef, namecours, pays, nbrpartic){
    this.sessionExamenService.envoyerEmailFormateur(email, ref, dated, heure, langue,
      version, etat, etatsession,  namef, namecours, pays, nbrpartic).subscribe((resp: any) => {
    if (!resp.success) {
        this.toastr.error('Error', resp.error);
      }
    });
   }
   disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) < 0;
  }
}
