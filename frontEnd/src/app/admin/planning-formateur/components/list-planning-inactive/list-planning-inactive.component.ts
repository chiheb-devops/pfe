import { Component, OnInit } from '@angular/core';
import { PlanningService } from 'src/app/admin/services/planning.service';
import * as moment from 'moment';
@Component({
  selector: 'app-list-planning-inactive',
  templateUrl: './list-planning-inactive.component.html',
  styleUrls: ['./list-planning-inactive.component.css']
})
export class ListPlanningInactiveComponent implements OnInit {

  listOfData;
  listOfDisplayData;
  filterData = [];
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
  constructor( private planningService: PlanningService){  }
  ngOnInit(): void {
      this.fetchPlanning();
  }
  fetchPlanning(){
    this.planningService.getAllPlanningActivePast().subscribe((data: any) => {
      this.listOfData = data.results;
      this.tableReady = true;
      this.verifDataReady = false; 
      this.listOfDisplayData = [...this.listOfData];
      this.filterData = [];
      this.filterData = this.listOfData.filter( (i: any) => {
      i.date_debut = moment(i.date_debut).format('DD-MM-YYYY');
      i.date_fin = moment(i.date_fin).format('DD-MM-YYYY');
      if (i.version == null  || i.address_fournisseur == null || i.nom_fournisseur == null ) {
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
