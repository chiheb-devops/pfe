import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoursService } from 'src/app/admin/services/cours.service';
import { SessionService } from 'src/app/admin/services/session.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import countries from 'src/app/countries.json';
import { CategorieService } from 'src/app/admin/services/categorie.service';
import { PlanningService } from 'src/app/admin/services/planning.service';
@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent implements OnInit {
  debut: NgbDateStruct;
  fin: NgbDateStruct;
  Model: NgbDateStruct;
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
  todayDate;
  title = 'json-file-read-angular';
  isLoading = false;
  public countryList: {name: string }[] = countries;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private coursService: CoursService,
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private categorieService: CategorieService,
    private planningService: PlanningService,
  ) { }

   ngOnInit(): void {
    const current = new Date();
    this.todayDate = {
  year: current.getFullYear(),
  month: current.getMonth() + 1,
  day: current.getDate()
};
    this.dateTodayVerif = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');
    this.fetchCategorie();
    this.fetchAllCours();
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchSessionWithEmail(this.id);
    this.sessionService.getSessionById(this.id).subscribe( async (resp: any) => {
      this.Result = resp.result[0];
      this.newDateDebut = moment(this.Result.date_debut).format('YYYY-MM-DD');
      this.a = new Date(this.Result.date_debut);
      this.year = this.a.getFullYear();
      this.month = this.a.getMonth() + 1;
      this.day = this.a.getDate();
      this.debut = {
        year: this.year,
        month: this.month,
        day: this.day
      };
      this.defautfetchCours();
      this.defautversion();
      this.defaultDisplayCountry();
      this.SessionForm.patchValue({
        cat_formation: this.Result.categorie,
        ref_formation: this.Result.ref_formation,
        version_session: this.Result.version_session,
        type: this.Result.type,
        date_debut: this.debut,
        langue: this.Result.langue,
        lieu: this.Result.lieu,
        etat_session: this.Result.etat_session
      });
    });
    this.SessionForm = this.formBuilder.group({
      cat_formation: ['', ],
      ref_formation: ['', [Validators.required]],
      date_debut: ['', [Validators.required]],
      type: ['', [Validators.required]],
      version_session: ['', ],
      langue: ['', [Validators.required]],
      lieu: ['', ],
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
    const DateDebut = this.SessionForm.value.date_debut;
    const myDateDebut = new Date(DateDebut.year, DateDebut.month - 1, DateDebut.day);
    const valueDateDebut = moment(myDateDebut).format('YYYY-MM-DD');
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
      id_cour: filterIdCour[0].id,
      date_debut: valueDateDebut,
      type: this.SessionForm.value.type,
      langue: this.SessionForm.value.langue,
      lieu: this.SessionForm.value.lieu || null,
      etat_session: this.SessionForm.value.etat_session
    };
    if (this.dateTodayVerif < moment(this.Result.date_fin).format('YYYY-MM-DD')) {
      this.sessionService.updateSession(this.id, session).subscribe( async (resp: any) => {
        if (!resp.success) {
          this.toastr.error('Erreur', resp.error);
          this.isLoading = false;
        } else {
          if (this.sessionEmail[0].email && session.etat_session !== 'en cours' && session.etat_session !== 'clôturée' ) {
            const NEWdateD = new Date(session.date_debut);
            const convertduree: number = this.sessionEmail[0].duree - 1;
            NEWdateD.setDate(NEWdateD.getDate() + convertduree);
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
            if (this.SessionForm.value.type === 'présentielle') {
              const resuls = await this.envoyerEmail(this.sessionEmail[0].email, this.SessionForm.value.ref_formation,
                 moment(session.date_debut).format('DD-MM-YYYY'), moment(NEWdateD).format('DD-MM-YYYY'),
               session.type, session.langue, this.plannigBySession[0].address,
              this.SessionForm.value.version_session, this.plannigBySession[0].statut_f, session.etat_session,
              this.sessionEmail[0].name, filterIdCour[0].designation, session.lieu, this.plannigBySession[0].contact_for,
                this.plannigBySession[0].numero_for, this.plannigBySession[0].mail_contact, this.plannigBySession[0].nbr_participant);
              } else {
                const resuld = await this.envoyerEmailDistancielle(this.sessionEmail[0].email, this.SessionForm.value.ref_formation,
                  moment(session.date_debut).format('DD-MM-YYYY'), moment(NEWdateD).format('DD-MM-YYYY'),
                session.type, session.langue, this.SessionForm.value.version_session,
                 this.plannigBySession[0].statut_f, session.etat_session,
               this.sessionEmail[0].name, filterIdCour[0].designation, this.plannigBySession[0].contact_for,
                 this.plannigBySession[0].numero_for, this.plannigBySession[0].mail_contact, this.plannigBySession[0].nbr_participant);
              }
          }
          if (this.sessionEmail[0].email && session.etat_session !== 'en cours' && session.etat_session !== 'clôturée' &&
           session.etat_session !== 'confirmée' && session.etat_session !== 'en attente de confirmation') {
             const p = {
               id: this.plannigBySession[0].id,
               statut_f: 'annulée'
             };
             this.planningService.editPlanningForSession(p).subscribe((d: any) => {
              if (!d.success) {
                this.toastr.error('Erreur', d.error);
              }});
          }
          if (this.sessionEmail[0].email && session.etat_session === 'confirmée') {
             const pl = {
               id: this.plannigBySession[0].id,
               statut_f: 'Confirmée'
             };
             this.planningService.editPlanningForSession(pl).subscribe((d: any) => {
              if (!d.success) {
                this.toastr.error('Erreur', d.error);
              }});
          }
          this.toastr.success('Succès');
          this.router.navigate(['/admin/list-session-cours-examen/session-cours/list-cours']);
        }
      });
   }
  }
   fetchAllCours(){
    this.coursService.getAllCours().subscribe((resp: any) => {
      this.allCours = resp.results;
    });
   }
   defautfetchCours() {
    this.coursService.getAllDistinctCours().subscribe((data: any) => {
      this.cours = data.result;
      this.filtercours = this.cours.filter((cour: any) => {
        return cour.categorie === this.Result.categorie;
      });
    });
 }
   fetchSessionWithEmail(id) {
    this.sessionService.getSessionWithEmailById(id).subscribe((data: any) => {
      this.sessionEmail = data.result;
    });
    this.planningService.getPlanningUpdatedByIdSession(this.id).subscribe( (resp: any) => {
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
      this.coursService.getAllVersionByRef(this.SessionForm.value.ref_formation).subscribe((resp: any) => {
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
    this.coursService.getAllVersionByRef(this.Result.ref_formation).subscribe((resp: any) => {
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
  changeType(e){
    if (e) {
      if (this.SessionForm.value.type === 'présentielle') {
        this.displayCountry = true;
        this.SessionForm.get('lieu').setValidators(Validators.required);
      } else {
       this.displayCountry = false;
       this.SessionForm.get('lieu').clearValidators();
       this.SessionForm.patchValue({
         lieu: '',
       });
      }
    }

  }
  defaultDisplayCountry(){
    if (this.Result.type === 'présentielle') {
      this.displayCountry = true;
      this.SessionForm.get('lieu').setValidators(Validators.required);
    } else {
     this.displayCountry = false;
     this.SessionForm.get('lieu').clearValidators();
     this.SessionForm.patchValue({
       lieu: '',
     });
    }
  }
  envoyerEmail(email, ref, dated, datef, type, langue, lieu, version, etat , etatsession,
    namef, namecours, pays, contact, numeroc, mailc, nbrpartic){
    this.sessionService.envoyerEmailFormateur(email, ref, dated, datef, type, langue, lieu,
      version, etat, etatsession,  namef, namecours, pays, contact, numeroc, mailc, nbrpartic).subscribe((resp: any) => {
    if (!resp.success) {
        this.toastr.error('Error', resp.error);
      }
    });
   }
   envoyerEmailDistancielle(email, ref, dated, datef, type, langue, version, etat , etatsession,
    namef, namecours, contact, numeroc, mailc, nbrpartic){
    this.sessionService.envoyerEmailFormateurTypeDistancielle(email, ref, dated, datef, type, langue, version, etat , etatsession,
      namef, namecours, contact, numeroc, mailc, nbrpartic).subscribe((resp: any) => {
    if (!resp.success) {
        this.toastr.error('Error', resp.error);
      }
    });
   }
}
