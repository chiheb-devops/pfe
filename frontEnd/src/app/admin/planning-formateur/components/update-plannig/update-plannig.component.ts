import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { FormateurService } from 'src/app/admin/services/formateur.service';
import { SessionService } from 'src/app/admin/services/session.service';
import { FournisseurService } from 'src/app/admin/services/fournisseur.service';
import { PlanningService } from 'src/app/admin/services/planning.service';
@Component({
  selector: 'app-update-plannig',
  templateUrl: './update-plannig.component.html',
  styleUrls: ['./update-plannig.component.css']
})
export class UpdatePlannigComponent implements OnInit {
  PlanningForm: FormGroup;
  submitted = false;
  formateur = [];
  session = [];
  displayAddress = false;
  displayVersion = false;
  filtercours = [];
  fournisseur = [];
  addresses = [];
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
  Result ;
  dateToday ;
  mobile = false;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private formateurService: FormateurService,
    private sessionService: SessionService,
    private fornisseurService: FournisseurService,
    private planningService: PlanningService,
    private route: ActivatedRoute
  ) { }

 async ngOnInit() {
    if (window.screen.width < 768) {
    this.mobile = true;
  }
    this.id = this.route.snapshot.paramMap.get('id');
    this.dateToday = moment(new Date()).format('YYYY-MM-DD');
    this.PlanningForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      statut_f: ['', [Validators.required]],
      cat_formation: [''],
      version_formation: [''],
      type_formation: [''],
      ref_formation: [''],
      date_formation: [''],
      nom_four: ['', [Validators.required]],
      nbr_participant: ['', [Validators.required]],
      numero_for: ['', [Validators.required]],
      mail_contact: ['', [Validators.required]],
      contact_for: ['', [Validators.required]],
  });
    const a = await this.planningService.getPlanningById(this.id).subscribe( (resp: any) => {
    this.Result = resp.result[0];
    this.PlanningForm.patchValue({
      name: this.Result.name,
      cat_formation: this.Result.categorie,
      ref_formation: this.Result.ref_formation,
      version_formation: this.Result.version,
      type_formation: this.Result.type,
      date_formation:  `${moment(this.Result.date_debut).format('DD-MM-YYYY')} / ${moment(this.Result.fin).format('DD-MM-YYYY')}`,
      statut_f: this.Result.statut_f,
      nom_four: this.Result.nom_fournisseur,
      numero_for: this.Result.numero_for,
      contact_for: this.Result.contact_for,
      mail_contact: this.Result.mail_contact,
      nbr_participant: this.Result.nbr_participant
    });
    this.Result.date_formation = `${moment(this.Result.date_debut).format('DD-MM-YYYY')} / ${moment(this.Result.fin).format('DD-MM-YYYY')}`;
    if (this.Result.version !== null && this.Result.version !== '') {
      this.displayVersion = true;
    }
    this.fetchFormateur();
    this.fetchFournisseur();
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
      id_formateur: this.filterFormateur[0].id,
      statut_f: this.PlanningForm.value.statut_f,
      id_fournisseur: this.idFournisseur,
      id_address_fournisseur: null,
      nbr_participant: this.PlanningForm.value.nbr_participant,
      numero_for: this.PlanningForm.value.numero_for,
      mail_contact: this.PlanningForm.value.mail_contact,
      contact_for: this.PlanningForm.value.contact_for,
    };
    if (this.dateToday < moment(this.Result.date_fin).format('YYYY-MM-DD')) {
      this.planningService.updatePlanning(this.id, planning).subscribe( async (resp: any) => {
        if (!resp.success) {
          this.toastr.error('Erreur', resp.error);
          this.isLoading = false;
        } else {
          if (this.Result.version !== null && this.Result.version !== '') {
           // rien
          } else {
            this.Result.version = null;
          }
          if (this.filterFormateur[0].id !== this.Result.id_formateur ) {
            this.sessionService.emailFormateurChanger(this.Result.email, this.Result.name,
              this.Result.ref_formation, this.Result.designation, moment(this.Result.date_debut).format('DD-MM-YYYY'),
              moment(this.Result.date_fin).format('DD-MM-YYYY')).subscribe((r: any) => {
           if (!r.success) {
             this.toastr.error('Erreur', r.error);
           }
          });
           }
          const resul = await this.affectedSession(this.Result.id_session, planning.id_formateur);
          const namef = this.filterFormateur[0].nom + ' ' + this.filterFormateur[0].prenom;
          const resuls = await this.envoyerEmailDistancielle(this.filterFormateur[0].email, this.Result.ref_formation,
            moment(this.Result.date_debut).format('DD-MM-YYYY'), moment(this.Result.date_fin).format('DD-MM-YYYY'),
            this.Result.type, this.Result.langue, this.Result.version,
             planning.statut_f, this.Result.etat_session, namef, this.Result.designation ,
              planning.contact_for, planning.numero_for, planning.mail_contact , planning.nbr_participant);
          this.toastr.success('Succès');
          this.router.navigate(['/admin/list-planning-cours-examen/planning-cours/list-planning-cours']);
        }
      });
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
    this.formateur.forEach(f => {
     if (f.schedule) {
      this.schedule = f.schedule.split(',');
      this.schedule.forEach(s => {
        this.d = s.split('/');
        if ( moment(this.Result.date_debut).isBetween(this.d[0], this.d[1] , undefined, '[]') ||
         moment(this.Result.date_fin).isBetween(this.d[0], this.d[1] , undefined, '[]') ) {
          this.dataFormateur.push({...f , reserved : 'Réservée par ' + this.d[2] + ' de ' + this.d[0] + ' -- ' + this.d[1] });
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
      this.dataFormateurFil = this.dataFormateurFilter.filter(filtredform =>  Number(filtredform.id)  !== Number(this.Result.id_formateur));
      this.defaultGetEmail();
    });
  }
  );
 }
 changeFournisseurDefault(){
   if(this.Result.nom_fournisseur !== null){
    const nameFournisseur = this.PlanningForm.value.nom_four;
    this.fourn  = this.fournisseur.filter(f => {
     return f.nom_fournisseur === nameFournisseur;
    });
    this.idFournisseur = this.fourn[0].id;
   }

}
onchangeFournisseur(e){
  if (e && this.PlanningForm.value.nom_four) {
    this.submitted = false;
    const nameFournisseur = this.PlanningForm.value.nom_four;
    this.fourn  = this.fournisseur.filter(f => {
     return f.nom_fournisseur === nameFournisseur;
    });
    this.idFournisseur = this.fourn[0].id;
  }

}
getEmail(e){
  if (e && this.PlanningForm.value.name) {
    this.filterFormateur = [];
    this.filterFormateur = this.dataFormateurFilter.filter(f => {
      return Number(f.id) === Number(this.PlanningForm.value.name);
     });
  }

}
defaultGetEmail(){
  this.filterFormateur = [];
  this.filterFormateur = this.dataFormateurFilter.filter(f => {
    return Number(f.id) === this.Result.id_formateur;
   });
}
 fetchFournisseur(){
  this.fornisseurService.getAllFournisseurWithoutAdress().subscribe((data: any) => {
    this.fournisseur = data.results;
    this.changeFournisseurDefault();
  });
 }
 affectedSession(id, name){
   this.sessionService.updateSessionAffected(id, name).subscribe((resp: any) => {
    if (!resp.success) {
      this.toastr.error('Erreur', resp.error);
    }
  });
 }
 envoyerEmailDistancielle(email, ref, dated, datef, type, langue, version, etat , etatsession,
  namef, namecours, contact, numeroc, mailc, nbrpartic){
  this.sessionService.envoyerEmailFormateurTypeDistancielle(email, ref, dated, datef, type, langue, version, etat , etatsession,
    namef, namecours, contact, numeroc, mailc, nbrpartic).subscribe((resp: any) => {
  if (!resp.success) {
      this.toastr.error('Erreur', resp.error);
    }
  });
 }
}
