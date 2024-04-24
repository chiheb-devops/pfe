import { CoursService } from './../../../services/cours.service';
import { FormateurService } from './../../../services/formateur.service';
import { PlanningService } from './../../../services/planning.service';
import { FournisseurService } from './../../../services/fournisseur.service';
import { SessionService } from 'src/app/admin/services/session.service';
import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { CategorieService } from 'src/app/admin/services/categorie.service';
@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.css']
})
export class AddPlanningComponent implements OnInit {
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
    private sessionService: SessionService,
    private coursService: CoursService,
    private fornisseurService: FournisseurService,
    private planningService: PlanningService,
    private categorieService: CategorieService,
    private formateurService: FormateurService
  ) { }
  ngOnInit(): void {
    if (window.screen.width < 768) {
      this.mobile = true;
    }
    this.fetchCategorie();
    this.fetchFournisseur();
    this.PlanningForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      statut_f: ['', [Validators.required]],
      ref_formation: ['', [Validators.required]],
      version_formation: [''],
      type_formation: ['', [Validators.required]],
      pays_formation: [''],
      date_formation: ['', [Validators.required]],
      cat_formation: [''],
      nom_four: ['', [Validators.required]],
      address_four: ['', ],
      nbr_participant: ['', [Validators.required]],
      numero_for: ['', [Validators.required]],
      mail_contact: ['', [Validators.required, this.trimValidator]],
      contact_for: ['', [Validators.required, this.trimValidator]],
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
      id_formateur: Number(this.PlanningForm.value.name),
      id_session: Number(this.PlanningForm.value.date_formation) ,
      statut_f: this.PlanningForm.value.statut_f,
      id_fournisseur: this.idFournisseur,
      address_fournisseur: this.PlanningForm.value.address_four || null,
      nbr_participant: this.PlanningForm.value.nbr_participant,
      numero_for: this.PlanningForm.value.numero_for,
      mail_contact: this.PlanningForm.value.mail_contact,
      contact_for: this.PlanningForm.value.contact_for,
    };
    this.planningService.savePlanning(planning).subscribe( async (resp: any) => {
      if (!resp.success) {
        this.toastr.error('Erreur', resp.error);
        this.isLoading = false;
      } else {
        const resul = await this.affectedSession(planning.id_session, planning.id_formateur);
        const namef = this.filterFormateur[0].nom + ' ' + this.filterFormateur[0].prenom;
        if (this.versions[0].version !== null && this.versions[0].version !== '') {
         // rien
        }else{
          this.PlanningForm.value.version_formation = null;
        }
        if (this.PlanningForm.value.type_formation === 'présentielle') {
          const resuls = await this.envoyerEmail(this.filterFormateur[0].email, this.PlanningForm.value.ref_formation,
            moment(this.filterSession[0].date_debut).format('DD-MM-YYYY'), moment(this.filterSession[0].date_fin).format('DD-MM-YYYY'),
            this.PlanningForm.value.type_formation, this.filterSession[0].langue, this.PlanningForm.value.address_four,
            this.PlanningForm.value.version_formation, this.PlanningForm.value.statut_f, this.filterSession[0].etat_session, namef,
             this.filterSession[0].designation, this.PlanningForm.value.pays_formation,
            this.PlanningForm.value.contact_for, this.PlanningForm.value.numero_for,
            this.PlanningForm.value.mail_contact, this.PlanningForm.value.nbr_participant);
      }else{
        const resuld = await this.envoyerEmailDistancielle(this.filterFormateur[0].email, this.PlanningForm.value.ref_formation,
          moment(this.filterSession[0].date_debut).format('DD-MM-YYYY'), moment(this.filterSession[0].date_fin).format('DD-MM-YYYY'),
          this.PlanningForm.value.type_formation, this.filterSession[0].langue,
          this.PlanningForm.value.version_formation, this.PlanningForm.value.statut_f, this.filterSession[0].etat_session, namef,
           this.filterSession[0].designation,
          this.PlanningForm.value.contact_for, this.PlanningForm.value.numero_for,
          this.PlanningForm.value.mail_contact, this.PlanningForm.value.nbr_participant);
      }
        this.toastr.success('Succès');
        this.router.navigate(['/admin/list-planning-cours-examen/planning-cours/list-planning-cours']);
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
    this.planningService.getAllDistinctVersionFormation(this.PlanningForm.value.ref_formation).subscribe((data: any) => {
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
  this.displayType = true;
  this.displayPays = false;
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
  this.planningService.getAllDistinctTypeFormationWithoutVersion(this.PlanningForm.value.ref_formation).subscribe((data: any) => {
   this.types = data.results;
 });
}
changeVersion(e){
  if (e) {
    this.displayType = true;
    this.displayPays = false;
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
    this.planningService.getAllDistinctTypeFormation(this.PlanningForm.value.ref_formation,
       this.PlanningForm.value.version_formation).subscribe((data: any) => {
     this.types = data.results;
   });
  }
}
changeType(e){
  if (e) {
    this.pays = [];
    this.displayDate = false;
    this.displayFormateur = false;
    this.PlanningForm.patchValue({
      pays_formation: '',
      date_formation: '',
      name: '',
      address_four: '',
    });
    if (this.PlanningForm.value.type_formation === 'présentielle') {
      this.displayPays = true;
      this.displayAddress = true;
      this.PlanningForm.get('address_four').setValidators([Validators.required, this.trimValidator]);
    } else {
      this.PlanningForm.get('address_four').clearValidators();
      this.displayPays = false;
      this.displayAddress = false;
      this.dates = [];
      this.displayDate = true;
      this.PlanningForm.patchValue({
        pays_formation: '',
        date_formation: '',
        name: '',
        address_four: '',
      });
      if (this.versions[0].version !== null && this.versions[0].version !== '') {
        this.planningService.getAllDateFormationDistintDistienciellle(this.PlanningForm.value.ref_formation,
          this.PlanningForm.value.version_formation , this.PlanningForm.value.type_formation).subscribe((data: any) => {
         this.dates = data.results;
       });
    } else {
      this.planningService.getAllDateFormationDistintDistienciellleWithoutVersion(this.PlanningForm.value.ref_formation,
         this.PlanningForm.value.type_formation).subscribe((data: any) => {
       this.dates = data.results;
     });
     }
    }
    if (this.versions[0].version !== null && this.versions[0].version !== '') {
      this.planningService.getAllDistinctPaysFormation(this.PlanningForm.value.ref_formation,
        this.PlanningForm.value.version_formation, this.PlanningForm.value.type_formation ).subscribe((data: any) => {
      this.pays = data.results;
    });
  } else {
    this.planningService.getAllDistinctPaysFormationWithoutVersion(this.PlanningForm.value.ref_formation,
      this.PlanningForm.value.type_formation ).subscribe((data: any) => {
    this.pays = data.results;
  });
   }
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
      this.planningService.getAllDateFormationPresentielle(this.PlanningForm.value.ref_formation,
        this.PlanningForm.value.version_formation , this.PlanningForm.value.type_formation,
         this.PlanningForm.value.pays_formation).subscribe((data: any) => {
       this.dates = data.results;
     });
  } else {
    this.planningService.getAllDateFormationPresentielleWithoutVersion(this.PlanningForm.value.ref_formation,
     this.PlanningForm.value.type_formation, this.PlanningForm.value.pays_formation).subscribe((data: any) => {
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
  const res = await this.planningService.getAllAffecteSessionFormateur().subscribe( async (data: any) => {
    this.formateur = data.result;
    if (this.formateur) {
      this.formateur.forEach(f => {
        if (f.schedule) {
         this.schedule = f.schedule.split(',');
         this.schedule.forEach(s => {
           this.d = s.split('/');
           if (moment(this.filterSession[0].date_debut).format('YYYY-MM-DD') >=
            this.d[0] &&  moment(this.filterSession[0].date_debut).format('YYYY-MM-DD') <=
        this.d[1] || moment(this.filterSession[0].date_fin).format('YYYY-MM-DD') >=
         this.d[0] &&  moment(this.filterSession[0].date_fin).format('YYYY-MM-DD') <= this.d[1]  )  {
             this.dataFormateur.push({...f , reserved : 'Réservée par ' + this.d[2] + ' de ' + this.d[0] +
              ' -- ' + this.d[1] });
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
    this.formateurService.getAllFormateur().subscribe((resp: any) => {
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
onchangeFournisseur(e){
  if (e) {
  const nameFournisseur = this.PlanningForm.value.nom_four;
  this.fourn  = this.fournisseur.filter(f => {
   return f.nom_fournisseur === nameFournisseur;
  });
  this.idFournisseur = this.fourn[0].id;
  this.PlanningForm.patchValue({
    address_four: '',
  });
  }

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
   this.planningService.getAllDistinctRefFormation(this.PlanningForm.value.cat_formation).subscribe((data: any) => {
    this.session = data.results;
    this.coursService.getAllRefByCategories(this.PlanningForm.value.cat_formation).subscribe((data: any) => {
      this.allref = data.result;
      let verif = false;
      if (this.allref.length > 0) {
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
 fetchFournisseur(){
  this.fornisseurService.getAllFournisseurWithoutAdress().subscribe((data: any) => {
    this.fournisseur = data.results;
  });
 }
 affectedSession(id, name){
   this.sessionService.updateSessionAffected(id, name).subscribe((resp: any) => {
    if (!resp.success) {
      this.toastr.error('Error', resp.error);
    }
  });
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
