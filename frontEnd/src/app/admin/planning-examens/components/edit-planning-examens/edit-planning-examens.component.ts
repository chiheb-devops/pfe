import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { PlanningExamensService } from 'src/app/admin/services/planning-examens.service';
import { SessionExamenService } from 'src/app/admin/services/session-examen.service';
import { FormateurService } from 'src/app/admin/services/formateur.service';
@Component({
  selector: 'app-edit-planning-examens',
  templateUrl: './edit-planning-examens.component.html',
  styleUrls: ['./edit-planning-examens.component.css']
})
export class EditPlanningExamensComponent implements OnInit {
  PlanningForm: FormGroup;
  submitted = false;
  formateur = [];
  session = [];
  displayAddress = false;
  displayVersion = false;
  filtercours = [];
  fournisseur = [];
  dates = [];
  idSession;
  filterFormateur;
  filterAddress = [];
  schedule = [];
  dataFormateur = [];
  fourn;
  idFournisseur;
  d = [];
  dataAllFormateur = [];
  dataFormateurFilter = [];
  dataFormateurFil = [];
  id;
  Result;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private sessionExamenService: SessionExamenService,
    private planningExamenService: PlanningExamensService,
    private formateurService: FormateurService,
    private route: ActivatedRoute
  ) { }

 async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.PlanningForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      statut_f: ['', [Validators.required]],
      cat_formation: [''],
      version_formation: [''],
      lieu_formation: [''],
      ref_formation: [''],
      date_formation: [''],
      nbr_participant: ['', [Validators.required]],
  });
    const a = await this.planningExamenService.getPlanningById(this.id).subscribe( (resp: any) => {
    this.Result = resp.result[0];
    console.log(this.Result);
    this.Result.date_ex = moment(this.Result.date_examen).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
    this.Result.heure_debut = moment(this.Result.date_ex, 'DD-MM-YYYY HH:mm:ss');
    this.Result.heure_debut = this.Result.heure_debut.format('HH:mm');
    this.Result.date_f = moment(this.Result.date_fin).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
    this.Result.heure_fin = moment(this.Result.date_f, 'DD-MM-YYYY HH:mm:ss');
    this.Result.heure_fin = this.Result.heure_fin.format('HH:mm');
    this.Result.heure = this.Result.heure_debut + ' à ' +  this.Result.heure_fin ;
    this.PlanningForm.patchValue({
      name: this.Result.name,
      cat_formation: this.Result.categorie,
      ref_formation: this.Result.ref_formation,
      version_formation: this.Result.version,
      lieu_formation: this.Result.lieu,
      date_formation:  `${moment(this.Result.date_examen).format('DD-MM-YYYY HH:mm')}`,
      statut_f: this.Result.statut_f,
      nbr_participant: this.Result.nbr_participant
    });
    this.Result.date_formation = `${moment(this.Result.date_examen).format('DD-MM-YYYY HH:mm')}` ;
    if ( this.Result.version !== null && this.Result.version !== '') {
      this.displayVersion = true;
    }
    this.fetchFormateur();
    });
  }

   // convenience getter for easy access to form fields
   get f()
    { return this.PlanningForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.PlanningForm.invalid) {
        return;
    }
    this.isLoading = true;
    const planning = {
      id_examinateur: this.filterFormateur[0].id,
      statut_f: this.PlanningForm.value.statut_f,
      nbr_participant: this.PlanningForm.value.nbr_participant,
    };
    this.planningExamenService.updatePlanning(this.id, planning).subscribe( async (resp: any) => {
        if (!resp.success) {
          this.toastr.error('Erreur', resp.error);
          this.isLoading = false;
        } else {
          if (this.Result.version !== null && this.Result.version !== '') {
            // rien
          } else {
            this.Result.version = null;
          }
          if (this.filterFormateur[0].id !== this.Result.id_examinateur ) {
           this.sessionExamenService.emailFormateurChanger(this.Result.email, this.Result.name,
             this.Result.ref_formation, this.Result.designation, this.Result.date_ex).subscribe((r: any) => {
          if (!r.success) {
            this.toastr.error('Erreur', r.error);
          }
         });
          }
          const resul = await this.affectedSession(this.Result.id_session, planning.id_examinateur);
          const namef = this.filterFormateur[0].nom + ' ' + this.filterFormateur[0].prenom;
          const resuls = await this.envoyerEmail(this.filterFormateur[0].email, this.Result.ref_formation,
            moment(this.Result.date_examen).format('DD-MM-YYYY'), this.Result.heure, this.Result.langue, this.Result.version,
             planning.statut_f, this.Result.etat_session, namef, this.Result.designation , this.Result.lieu,
           planning.nbr_participant);
          this.toastr.success('Succès');
          this.router.navigate(['/admin/list-planning-cours-examen/planning-examen/list-planning-examen']);
        }
      });
}
async fetchFormateur(){
  this.dataFormateurFilter = [];
  this.dataFormateur = [];
  this.schedule = [];
  this.formateur = [];
  this.dataAllFormateur = [];
  const res = await this.planningExamenService.getAllAffecteSessionFormateur().subscribe( async (data: any) => {
    this.formateur = data.result;
    this.formateur.forEach(f => {
     if (f.schedule) {
      this.schedule = f.schedule.split(',');
      this.schedule.forEach(s => {
        this.d = s.split('/');
        if (moment(this.Result.date_examen).isBetween(moment(this.d[0]).format('YYYY-MM-DD HH:mm'), moment(this.d[1]).format('YYYY-MM-DD HH:mm') , undefined, '[)') ||
        moment(this.Result.date_fin).isBetween(moment(this.d[0]).format('YYYY-MM-DD HH:mm'),
         moment(this.d[1]).format('YYYY-MM-DD HH:mm') , undefined, '()')  )  {
          this.dataFormateur.push({...f , reserved : 'Réservée par ' + this.d[2] + ' de ' + moment(this.d[0]).format('YYYY-MM-DD HH:mm')  +
           ' -- ' + moment(this.d[1]).format('YYYY-MM-DD HH:mm') });
        } else {
          this.dataFormateur.push({...f , reservednot : false});
        }
    });
     } else {
      this.dataFormateur.push({...f , reservednot : false});
     }
     this.schedule = [];
       });
    const datafil = this.dataFormateur.filter(ex => {
       return  ex.reserved;
    });
    const seen = new Set();
    const filteredArr =  await this.dataFormateur.filter(el => {
        const duplicate = seen.has(el.id);
        seen.add(el.id);
        return !duplicate;
    });
    this.dataFormateurFilter = [...datafil];
    let ids = [];
    datafil.forEach(dataFil => {
      ids.push(dataFil.id);
     });
    let verif = false;
    filteredArr.forEach(fil => {
    verif = false;
    for (const id of ids) {
      if (fil.id === id) {
        verif = true;
        break;
      } else {
       verif = false;
      }
    }
    if (!verif) {
      this.dataFormateurFilter.push(fil);
       }

    });
    ids = [];
    this.dataFormateurFilter.forEach(dataFil => {
      ids.push(dataFil.id);
     });
    this.formateurService.getAllExaminateurForPlanning().subscribe((resp: any) => {
      this.dataAllFormateur = resp.results;
      this.dataAllFormateur.forEach(fildata => {
        verif = false;
        for (const id of ids) {
          if (fildata.id === id) {
            verif = true;
            break;
          } else {
           verif = false;
          }
        }
        if (!verif) {
          this.dataFormateurFilter.push(fildata);
           }
        });
      this.dataFormateurFil = this.dataFormateurFilter.filter(filtredform =>  Number(filtredform.id)
        !== Number(this.Result.id_examinateur));
      this.defaultGetEmail();
    });
  }
  );
 }
getEmail(e){
  if (e) {
    this.filterFormateur = [];
    this.filterFormateur = this.dataFormateurFilter.filter(f => {
      return Number(f.id) === Number(this.PlanningForm.value.name);
     });
  }
}
defaultGetEmail(){
  this.filterFormateur = [];
  this.filterFormateur = this.dataFormateurFilter.filter(f => {
    return Number(f.id) === this.Result.id_examinateur;
   });
}
 affectedSession(id, name){
   this.sessionExamenService.updateSessionAffected(id, name).subscribe((resp: any) => {
    if (!resp.success) {
      this.toastr.error('Erreur', resp.error);
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

}
