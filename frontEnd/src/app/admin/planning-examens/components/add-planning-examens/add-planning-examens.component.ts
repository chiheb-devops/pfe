import { PlanningExamensService } from './../../../services/planning-examens.service';
import { ExamenService } from 'src/app/admin/services/examen.service';
import { SessionExamenService } from 'src/app/admin/services/session-examen.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { FormateurService } from 'src/app/admin/services/formateur.service';
import { CategorieService } from 'src/app/admin/services/categorie.service';
@Component({
  selector: 'app-add-planning-examens',
  templateUrl: './add-planning-examens.component.html',
  styleUrls: ['./add-planning-examens.component.css']
})
export class AddPlanningExamensComponent implements OnInit {
  PlanningForm: FormGroup;
  submitted = false;
  formateur = [];
  session = [];
  displayDate = false;
  displayAddress = false;
  displayFormateur = false;
  displayRef = false;
  displayVersion = false;
  displayType = false;
  displayPays = false;
  filtercours = [];
  fournisseur = [];
  dates = [];
  idSession;
  filterFormateur;
  filterSession = [];
  filterAddress = [];
  schedule = [];
  dataFormateur = [];
  fourn;
  idFournisseur;
  d = [];
  dataFormateurFilter = [];
  categories = [];
  versions = [];
  types = [];
  pays = [];
  dataAllFormateur = [];
  allref = [];
  filterallref = [];
  mobile = false;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private sessionExamenService: SessionExamenService,
    private examenService: ExamenService,
    private planningExamenService: PlanningExamensService,
    private categorieService: CategorieService,
    private formateurService: FormateurService
  ) { }
  ngOnInit(): void {
    this.fetchCategorie();
    this.PlanningForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      statut_f: ['', [Validators.required]],
      ref_formation: ['', [Validators.required]],
      version_formation: [''],
      pays_formation: [''],
      date_formation: ['', [Validators.required]],
      cat_formation: [''],
      nbr_participant: ['', [Validators.required]],
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
      id_examinateur: Number(this.PlanningForm.value.name),
      id_session: Number(this.PlanningForm.value.date_formation) ,
      statut_f: this.PlanningForm.value.statut_f,
      nbr_participant: this.PlanningForm.value.nbr_participant,
    };
    this.planningExamenService.savePlanning(planning).subscribe( async (resp: any) => {
      if (!resp.success) {
        this.toastr.error('Erreur', resp.error);
        this.isLoading = false;
      } else {
        const resul = await this.affectedSession(planning.id_session, planning.id_examinateur);

        const namef = this.filterFormateur[0].nom + ' ' + this.filterFormateur[0].prenom;
        if (this.versions[0].version !== null && this.versions[0].version !== '') {
         // rien
        }else{
          this.PlanningForm.value.version_formation = null;
        }
        const resuls = await this.envoyerEmail(this.filterFormateur[0].email, this.PlanningForm.value.ref_formation,
          moment(this.filterSession[0].date_examen).format('DD-MM-YYYY'), this.filterSession[0].heure,
           this.filterSession[0].langue, this.PlanningForm.value.version_formation,
           this.PlanningForm.value.statut_f, this.filterSession[0].etat_session, namef,
           this.filterSession[0].designation, this.PlanningForm.value.pays_formation, this.PlanningForm.value.nbr_participant);
        this.toastr.success('Succès');
        this.router.navigate(['/admin/list-planning-cours-examen/planning-examen/list-planning-examen']);
      }
    });
}
onchange(e){
  if (e) {
    this.displayType = false;
    this.displayPays = false;
    this.displayDate = false;
    this.displayFormateur = false;
    this.displayAddress = false;
    this.versions = [];
    this.PlanningForm.patchValue({
      version_formation: '',
      type_formation: '',
      pays_formation: '',
      date_formation: '',
      name: '',
      address_four: '',
    });
    this.planningExamenService.getAllDistinctVersionFormation(this.PlanningForm.value.ref_formation).subscribe((data: any) => {
     this.versions = data.results;
     if (this.versions[0].version !== null && this.versions[0].version !== '') {
      this.displayVersion = true;
    } else {
     this.displayVersion = false;
     this.withoutVersion();
    }
   });
  }
}
withoutVersion(){
  this.displayPays = true;
  this.displayDate = false;
  this.displayFormateur = false;
  this.displayAddress = false;
  this.types = [];
  this.PlanningForm.patchValue({
    type_formation: '',
    pays_formation: '',
    date_formation: '',
    name: '',
    address_four: '',
  });
  this.planningExamenService.getAllDistinctPaysFormationWithoutVersion(this.PlanningForm.value.ref_formation).subscribe((data: any) => {
  this.pays = data.results;
});
}
changeVersion(e){
  if (e) {
    this.displayPays = true;
    this.displayDate = false;
    this.displayFormateur = false;
    this.displayAddress = false;
    this.types = [];
    this.PlanningForm.patchValue({
      type_formation: '',
      pays_formation: '',
      date_formation: '',
      name: '',
      address_four: '',
    });
    this.planningExamenService.getAllDistinctPaysFormation(this.PlanningForm.value.ref_formation,
       this.PlanningForm.value.version_formation).subscribe((data: any) => {
    this.pays = data.results;
  });
  }
}
changePays(e){
  if (e) {
    this.dates = [];
    this.displayDate = true;
    this.displayFormateur = false;
    this.PlanningForm.patchValue({
      date_formation : '',
      name : '',
    });
    if (this.versions[0].version !== null && this.versions[0].version !== '') {
      this.planningExamenService.getAllDateFormationPresentielle(this.PlanningForm.value.ref_formation,
        this.PlanningForm.value.version_formation ,
         this.PlanningForm.value.pays_formation).subscribe((data: any) => {
       this.dates = data.results;
     });
  } else {
    this.planningExamenService.getAllDateFormationPresentielleWithoutVersion(this.PlanningForm.value.ref_formation,
       this.PlanningForm.value.pays_formation).subscribe((data: any) => {
     this.dates = data.results;
   });
   }
  }

}
getIdSession(e){
  if (e) {
    this.displayFormateur = true;
    this.filterSession = [];
    this.filterSession = this.dates.filter(f => {
      return Number(f.id) === Number(this.PlanningForm.value.date_formation);
    });
    this.filterSession[0].date_ex = moment(this.filterSession[0].date_examen).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
    this.filterSession[0].heure_debut = moment(this.filterSession[0].date_ex, 'DD-MM-YYYY HH:mm:ss');
    this.filterSession[0].heure_debut = this.filterSession[0].heure_debut.format('HH:mm');
    this.filterSession[0].date_f = moment(this.filterSession[0].date_fin).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
    this.filterSession[0].heure_fin = moment(this.filterSession[0].date_f, 'DD-MM-YYYY HH:mm:ss');
    this.filterSession[0].heure_fin = this.filterSession[0].heure_fin.format('HH:mm');
    this.filterSession[0].heure = this.filterSession[0].heure_debut + ' à ' +  this.filterSession[0].heure_fin ;
    this.PlanningForm.patchValue({
     name : ''
     });
    this.fetchFormateur();
  }

}
async fetchFormateur(){
  this.dataFormateurFilter = [];
  this.dataFormateur = [];
  this.schedule = [];
  this.formateur = [];
  this.dataAllFormateur = [];
  const res = await this.planningExamenService.getAllAffecteSessionFormateur().subscribe( async (data: any) => {
    this.formateur = data.result;
    if (this.formateur) {
      this.formateur.forEach(f => {
        if (f.schedule) {
         this.schedule = f.schedule.split(',');
         this.schedule.forEach(s => {
           this.d = s.split('/');
           if (moment(this.filterSession[0].date_examen).format('YYYY-MM-DD HH:mm') >=
           moment(this.d[0]).format('YYYY-MM-DD HH:mm') &&  moment(this.filterSession[0].date_examen).format('YYYY-MM-DD HH:mm') <
           moment(this.d[1]).format('YYYY-MM-DD HH:mm') || moment(this.filterSession[0].date_fin).format('YYYY-MM-DD HH:mm') >
           moment(this.d[0]).format('YYYY-MM-DD HH:mm') &&
             moment(this.filterSession[0].date_fin).format('YYYY-MM-DD HH:mm') < moment(this.d[1]).format('YYYY-MM-DD HH:mm')  )  {
             this.dataFormateur.push({...f , reserved : 'Réservée par ' + this.d[2] + ' de ' +
             moment(this.d[0]).format('YYYY-MM-DD HH:mm') +
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
    }
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
    });
  }
  );

 }

getEmail(e){
  if (e) {
    this.filterFormateur = this.dataAllFormateur.filter(f => {
      return Number(f.id) === Number(this.PlanningForm.value.name);
    });
  }
}

 fetchRefFormation(){
   this.session = [];
   this.allref = [];
   this.filterallref = [];
   this.displayFormateur = false;
   this.PlanningForm.patchValue({
    version_formation: '',
    ref_formation: '',
    type_formation: '',
    pays_formation: '',
    date_formation: '',
    name: '',
  });
   this.planningExamenService.getAllDistinctRefFormation(this.PlanningForm.value.cat_formation).subscribe((data: any) => {
    this.session = data.results;
    this.examenService.getAllRefByCategories(this.PlanningForm.value.cat_formation).subscribe((datag: any) => {
      this.allref = datag.result;
      let verif = false;
      if (this.allref) {
        this.allref.forEach(fildata => {
          verif = false;
          for (const sess of this.session) {
            if (fildata.ref_form == sess.ref_form) {
              verif = true;
              break;
            } else {
             verif = false;
            }
          }
          if (!verif) {
            this.filterallref.push(fildata);
             }
          });
      }
    });
  });
 }

 affectedSession(id, name){
   this.sessionExamenService.updateSessionAffected(id, name).subscribe((resp: any) => {
    if (!resp.success) {
      this.toastr.error('Error', resp.error);
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
 fetchCategorie(){
  this.categorieService.getAllCategories().subscribe((data: any) => {
    this.categories = data.results;
  });
 }
 changeCatgory(e){
   if (e) {
    this.displayRef = true;
    this.displayVersion = false;
    this.displayType = false;
    this.displayPays = false;
    this.displayDate = false;
    this.displayFormateur = false;
    this.PlanningForm.patchValue({
     ref_formation: '',
     version_formation: '',
     type_formation: '',
     pays_formation: '',
     date_formation: '',
     name: '',
   });
    this.fetchRefFormation();
   }
 }
 trimValidator: ValidatorFn = (control: FormControl) => {
  if (control.value.startsWith(' ')) {
    return {
      'trimError': { value: 'control has leading whitespace' }
    };
  }
  if (control.value.endsWith(' ')) {
    return {
      'trimError2': { value: 'control has trailing whitespace' }
    };
  }
  return null;
}
}
