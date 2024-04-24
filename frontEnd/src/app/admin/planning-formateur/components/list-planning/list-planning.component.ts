import { PlanningService } from './../../../services/planning.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { SessionService } from 'src/app/admin/services/session.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-planning',
  templateUrl: './list-planning.component.html',
  styleUrls: ['./list-planning.component.css']
})
export class ListPlanningComponent implements OnInit {
  listOfData = [];
  listOfDisplayData;
  filterData = [];
  DataForEmail = [];
  term = '';
  ref = '';
  version = '';
  dateP = '';
  nameF = '';
  state = '';
  provider = '';
  type = '';
  place = '';
  estimated = '';
  phone = '';
  mail = '';
  contact = '';
  verifDataReady = true;
  tableReady = false;
  constructor( private planningService: PlanningService,  private sessionService: SessionService,  private toastr: ToastrService){  }
  ngOnInit(): void {
      this.fetchPlanning();
  }
  deletePlanning(id, dateDebut, idSession) {
      Swal.fire({
        title: 'Êtes vous sûr de vouloir supprimer ce planning ?',
        showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.planningService.deletePlanningAfterAffected(id).subscribe(
            async (resp: any) => {
               if (!resp.success) {
                 this.toastr.error('Erreur', resp.error);
               } else {
                 this.DataForEmail = this.listOfData.filter(x => {
                  return x.id == id; });
                  this.sessionService.emailFormateurChanger(this.DataForEmail[0].email, this.DataForEmail[0].name,
                    this.DataForEmail[0].ref_formation, this.DataForEmail[0].designation, this.DataForEmail[0].date_debut,
                    this.DataForEmail[0].date_fin).subscribe((f: any) => {
                 if (!f.success) {
                   this.toastr.error('Erreur', f.error);
                 }
                });
                 const resul = await this.affectedSession(idSession);
                 this.toastr.success('Succès');
                 this.fetchPlanning();
               }
             }
           );
        }
      });
  }
  affectedSession(id){
    this.sessionService.updateSessionEmptyAffected(id).subscribe((resp: any) => {
     if (!resp.success) {
       this.toastr.error('Erreur', resp.error);
     }
   });
  }
  fetchPlanning(){
    this.planningService.getAllPlanning().subscribe((data: any) => {
      this.listOfData = data.results;  
      this.tableReady = true;
      this.verifDataReady = false;  
      this.listOfDisplayData = [...this.listOfData];
      this.filterData = [];
      this.filterData = this.listOfData.filter( (i: any) => {
      i.date_debut = moment(i.date_debut).format('DD-MM-YYYY');
      i.date_fin = moment(i.date_fin).format('DD-MM-YYYY');
      if (i.version == null  || i.address_fournisseur == null || i.nom_fournisseur == null) {
       if (i.version == null) {
        i.version = '';
       }
       if (i.address_fournisseur == null) {
        i.address_fournisseur = '';
       }
       if (i.nom_fournisseur == null) {
        i.nom_fournisseur = '';
       }
       return i;
      }  else {
        return i;
      }});
    });
   }
   searchRef(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      (item.date_debut.indexOf(this.dateP) !== -1 ||
      item.date_fin.indexOf(this.dateP) !== -1 ) &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.nom_fournisseur.toLowerCase().indexOf(this.provider.toLowerCase()) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.address_fournisseur.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 &&
      item.numero_for.indexOf(this.phone) !== -1 &&
      item.mail_contact.toLowerCase().indexOf(this.mail.toLowerCase()) !== -1 &&
      item.contact_for.toLowerCase().indexOf(this.contact.toLowerCase()) !== -1 ;
         });
  }
  searchVersion(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      (item.date_debut.indexOf(this.dateP) !== -1 ||
      item.date_fin.indexOf(this.dateP) !== -1 ) &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.nom_fournisseur.toLowerCase().indexOf(this.provider.toLowerCase()) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.address_fournisseur.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 &&
      item.numero_for.indexOf(this.phone) !== -1 &&
      item.mail_contact.toLowerCase().indexOf(this.mail.toLowerCase()) !== -1 &&
      item.contact_for.toLowerCase().indexOf(this.contact.toLowerCase()) !== -1 ;
         });
  }
  searchDate(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      (item.date_debut.indexOf(this.dateP) !== -1 ||
      item.date_fin.indexOf(this.dateP) !== -1 ) &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.nom_fournisseur.toLowerCase().indexOf(this.provider.toLowerCase()) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.address_fournisseur.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 &&
      item.numero_for.indexOf(this.phone) !== -1 &&
      item.mail_contact.toLowerCase().indexOf(this.mail.toLowerCase()) !== -1 &&
      item.contact_for.toLowerCase().indexOf(this.contact.toLowerCase()) !== -1 ;
         });
  }
  searchInstructor(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      (item.date_debut.indexOf(this.dateP) !== -1 ||
      item.date_fin.indexOf(this.dateP) !== -1 ) &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.nom_fournisseur.toLowerCase().indexOf(this.provider.toLowerCase()) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.address_fournisseur.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 &&
      item.numero_for.indexOf(this.phone) !== -1 &&
      item.mail_contact.toLowerCase().indexOf(this.mail.toLowerCase()) !== -1 &&
      item.contact_for.toLowerCase().indexOf(this.contact.toLowerCase()) !== -1 ;
         });
  }
  searchState(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      (item.date_debut.indexOf(this.dateP) !== -1 ||
      item.date_fin.indexOf(this.dateP) !== -1 ) &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.nom_fournisseur.toLowerCase().indexOf(this.provider.toLowerCase()) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.address_fournisseur.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 &&
      item.numero_for.indexOf(this.phone) !== -1 &&
      item.mail_contact.toLowerCase().indexOf(this.mail.toLowerCase()) !== -1 &&
      item.contact_for.toLowerCase().indexOf(this.contact.toLowerCase()) !== -1 ;
         });
  }
  searchProvider(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      (item.date_debut.indexOf(this.dateP) !== -1 ||
      item.date_fin.indexOf(this.dateP) !== -1 ) &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.nom_fournisseur.toLowerCase().indexOf(this.provider.toLowerCase()) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.address_fournisseur.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 &&
      item.numero_for.indexOf(this.phone) !== -1 &&
      item.mail_contact.toLowerCase().indexOf(this.mail.toLowerCase()) !== -1 &&
      item.contact_for.toLowerCase().indexOf(this.contact.toLowerCase()) !== -1 ;
         });
  }
  searchType(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      (item.date_debut.indexOf(this.dateP) !== -1 ||
      item.date_fin.indexOf(this.dateP) !== -1 ) &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.nom_fournisseur.toLowerCase().indexOf(this.provider.toLowerCase()) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.address_fournisseur.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 &&
      item.numero_for.indexOf(this.phone) !== -1 &&
      item.mail_contact.toLowerCase().indexOf(this.mail.toLowerCase()) !== -1 &&
      item.contact_for.toLowerCase().indexOf(this.contact.toLowerCase()) !== -1 ;
         });
  }
  searchAdresse(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      (item.date_debut.indexOf(this.dateP) !== -1 ||
      item.date_fin.indexOf(this.dateP) !== -1 ) &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.nom_fournisseur.toLowerCase().indexOf(this.provider.toLowerCase()) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.address_fournisseur.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 &&
      item.numero_for.indexOf(this.phone) !== -1 &&
      item.mail_contact.toLowerCase().indexOf(this.mail.toLowerCase()) !== -1 &&
      item.contact_for.toLowerCase().indexOf(this.contact.toLowerCase()) !== -1 ;
         });
  }
  searchEstimated(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      (item.date_debut.indexOf(this.dateP) !== -1 ||
      item.date_fin.indexOf(this.dateP) !== -1 ) &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.nom_fournisseur.toLowerCase().indexOf(this.provider.toLowerCase()) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.address_fournisseur.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 &&
      item.numero_for.indexOf(this.phone) !== -1 &&
      item.mail_contact.toLowerCase().indexOf(this.mail.toLowerCase()) !== -1 &&
      item.contact_for.toLowerCase().indexOf(this.contact.toLowerCase()) !== -1 ;
         });
  }
  searchPhone(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      (item.date_debut.indexOf(this.dateP) !== -1 ||
      item.date_fin.indexOf(this.dateP) !== -1 ) &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.nom_fournisseur.toLowerCase().indexOf(this.provider.toLowerCase()) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.address_fournisseur.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 &&
      item.numero_for.indexOf(this.phone) !== -1 &&
      item.mail_contact.toLowerCase().indexOf(this.mail.toLowerCase()) !== -1 &&
      item.contact_for.toLowerCase().indexOf(this.contact.toLowerCase()) !== -1 ;
         });
  }
  searchMail(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      (item.date_debut.indexOf(this.dateP) !== -1 ||
      item.date_fin.indexOf(this.dateP) !== -1 ) &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.nom_fournisseur.toLowerCase().indexOf(this.provider.toLowerCase()) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.address_fournisseur.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 &&
      item.numero_for.indexOf(this.phone) !== -1 &&
      item.mail_contact.toLowerCase().indexOf(this.mail.toLowerCase()) !== -1 &&
      item.contact_for.toLowerCase().indexOf(this.contact.toLowerCase()) !== -1 ;
         });
  }
  searchContact(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      (item.date_debut.indexOf(this.dateP) !== -1 ||
      item.date_fin.indexOf(this.dateP) !== -1 ) &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.nom_fournisseur.toLowerCase().indexOf(this.provider.toLowerCase()) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.address_fournisseur.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 &&
      item.numero_for.indexOf(this.phone) !== -1 &&
      item.mail_contact.toLowerCase().indexOf(this.mail.toLowerCase()) !== -1 &&
      item.contact_for.toLowerCase().indexOf(this.contact.toLowerCase()) !== -1 ;
         });
  }
}
