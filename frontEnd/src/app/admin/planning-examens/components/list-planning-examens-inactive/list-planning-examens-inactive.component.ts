import { Component, OnInit } from '@angular/core';
import { PlanningExamensService } from './../../../services/planning-examens.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
@Component({
  selector: 'app-list-planning-examens-inactive',
  templateUrl: './list-planning-examens-inactive.component.html',
  styleUrls: ['./list-planning-examens-inactive.component.css']
})
export class ListPlanningExamensInactiveComponent implements OnInit {
  listOfData = [];
  listOfDisplayData;
  filterData = [];
  DataForEmail = [];
  term = '';
  ref = '';
  version = '';
  dateP = '';
  heure = '';
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
  constructor( private planningExamenService: PlanningExamensService,
               private toastr: ToastrService){  }
  ngOnInit(): void {
      this.fetchPlanning();
  }
  fetchPlanning(){
    this.planningExamenService.getAllPlanningActivePast().subscribe((data: any) => {
      this.listOfData = data.results;
      this.tableReady = true;
      this.verifDataReady = false;
      this.listOfDisplayData = [...this.listOfData];
      this.filterData = [];
      this.filterData = this.listOfData.filter( (i: any) => {
        i.date_examen = moment(i.date_examen).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
        i.date = moment(i.date_examen, 'DD-MM-YYYY HH:mm:ss');
        i.date = i.date.format('DD-MM-YYYY');
        i.heure_debut = moment(i.date_examen, 'DD-MM-YYYY HH:mm:ss');
        i.heure_debut = i.heure_debut.format('HH:mm');
        i.date_fin = moment(i.date_fin).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
        i.heure_fin = moment(i.date_fin, 'DD-MM-YYYY HH:mm:ss');
        i.heure_fin = i.heure_fin.format('HH:mm');
        i.heure = i.heure_debut + ' à ' +  i.heure_fin ;
        if (i.version == null) {
       if (i.version == null) {
        i.version = '';
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
      item.version.toLowerCase().indexOf(this.version.toLowerCase()) !== -1 &&
      item.date.indexOf(this.dateP) !== -1 &&
      item.heure.indexOf(this.heure) !== -1  &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 ; });
  }
  searchVersion(){
      this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.toLowerCase().indexOf(this.version.toLowerCase()) !== -1 &&
      item.date.indexOf(this.dateP) !== -1 &&
      item.heure.indexOf(this.heure) !== -1  &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 ;
         });
  }
  searchDate(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.toLowerCase().indexOf(this.version.toLowerCase()) !== -1 &&
      item.date.indexOf(this.dateP) !== -1 &&
      item.heure.indexOf(this.heure) !== -1  &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 ; });
  }
  searchInstructor(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.toLowerCase().indexOf(this.version.toLowerCase()) !== -1 &&
      item.date.indexOf(this.dateP) !== -1 &&
      item.heure.indexOf(this.heure) !== -1  &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 ; });
  }
  searchState(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.toLowerCase().indexOf(this.version.toLowerCase()) !== -1 &&
      item.date.indexOf(this.dateP) !== -1 &&
      item.heure.indexOf(this.heure) !== -1  &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 ; });
  }
  searchProvider(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.toLowerCase().indexOf(this.version.toLowerCase()) !== -1 &&
      item.date.indexOf(this.dateP) !== -1 &&
      item.heure.indexOf(this.heure) !== -1  &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 ; });
  }
  searchEstimated(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.toLowerCase().indexOf(this.version.toLowerCase()) !== -1 &&
      item.date.indexOf(this.dateP) !== -1 &&
      item.heure.indexOf(this.heure) !== -1  &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 ; });
  }
  searchPays(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_formation.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.toLowerCase().indexOf(this.version.toLowerCase()) !== -1 &&
      item.date.indexOf(this.dateP) !== -1 &&
      item.heure.indexOf(this.heure) !== -1  &&
      item.name.toLowerCase().indexOf(this.nameF.toLowerCase()) !== -1 &&
      item.statut_f.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.nbr_participant.indexOf(this.estimated) !== -1 ; });
  }

}
