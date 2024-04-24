import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/admin/services/session.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-session-inactive',
  templateUrl: './list-session-inactive.component.html',
  styleUrls: ['./list-session-inactive.component.css']
})
export class ListSessionInactiveComponent implements OnInit {
  listOfData;
  listOfDisplayData;
  filterData = [];
  term = '';
  ref = '';
  version = '';
  startD = '';
  endD = '';
  type = '';
  langue = '';
  place = '';
  state = '';
  trainer = '';
  verifDataReady = true;
  tableReady = false;
  todayDate;
  constructor( private sessionService: SessionService,  private toastr: ToastrService){  }
  ngOnInit(): void {
    this.todayDate = moment(new Date()).format('YYYY-MM-DD');
    this.updateStautSession();
  }
  updateStautSession(){
    this.sessionService.getAllSessionActivePast().subscribe((data: any ) => {
     this.listOfData = data.results;
     if (this.listOfData.length === 0) {
      this.fetchSession();
    }
     this.listOfData.forEach((element, index, array) => {
       if (element.affecter !== null && element.etat_session === 'en cours' ) {
          this.sessionService.updateStatutSession(element.id, 'clôturée').subscribe((resp: any ) => {
            if (index === array.length - 1) {
              this.fetchSession();
            }
            if (!resp.success) {
              this.toastr.error('Erreur', resp.error);
            }
          });
       }
      else {
        if (index === array.length - 1) {
          this.fetchSession();
        }
      }
     });
   });
  }
  fetchSession(): void {
    this.sessionService.getAllSessionActivePast().subscribe((data: any ) => {
      this.listOfData = data.results;
      this.tableReady = true;
      this.verifDataReady = false;
      this.listOfDisplayData = [...this.listOfData];
      this.filterData = [];
      this.filterData = this.listOfData.filter( (i: any) => {
        i.date_debut = moment(i.date_debut).format('DD-MM-YYYY');
        i.date_fin = moment(i.date_fin).format('DD-MM-YYYY');
        if (i.version == null || i.name == null || i.lieu == null) {
       if (i.version == null) {
        i.version = '';
       }
       if (i.name == null) {
        i.name = '';
       }
       if (i.lieu == null) {
        i.lieu = '';
       }
       return i;
      }  else {
        return i;
      }});
    });
  }
  searchRef(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
 return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
 item.version.indexOf(this.version) !== -1 &&
 item.date_debut.indexOf(this.startD) !== -1 &&
 item.date_fin.indexOf(this.endD) !== -1 &&
 item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
 item.langue.toLowerCase().indexOf(this.langue.toLowerCase()) !== -1 &&
 item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
 item.etat_session.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
 item.name.toLowerCase().indexOf(this.trainer.toLowerCase()) !== -1 ;

    });
  }
  searchVersion(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.version.indexOf(this.version) !== -1 &&
      item.date_debut.indexOf(this.startD) !== -1 &&
      item.date_fin.indexOf(this.endD) !== -1 &&
      item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
      item.langue.toLowerCase().indexOf(this.langue.toLowerCase()) !== -1 &&
      item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
      item.etat_session.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
      item.name.toLowerCase().indexOf(this.trainer.toLowerCase()) !== -1 ;

         });
  }
searchStartDate(){
  this.listOfDisplayData = this.filterData.filter( (item: any) => {
    return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
    item.version.indexOf(this.version) !== -1 &&
    item.date_debut.indexOf(this.startD) !== -1 &&
    item.date_fin.indexOf(this.endD) !== -1 &&
    item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
    item.langue.toLowerCase().indexOf(this.langue.toLowerCase()) !== -1 &&
    item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
    item.etat_session.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
    item.name.toLowerCase().indexOf(this.trainer.toLowerCase()) !== -1 ;

       });
  }
searchEndDate(){
  this.listOfDisplayData = this.filterData.filter( (item: any) => {
    return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
    item.version.indexOf(this.version) !== -1 &&
    item.date_debut.indexOf(this.startD) !== -1 &&
    item.date_fin.indexOf(this.endD) !== -1 &&
    item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
    item.langue.toLowerCase().indexOf(this.langue.toLowerCase()) !== -1 &&
    item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
    item.etat_session.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
    item.name.toLowerCase().indexOf(this.trainer.toLowerCase()) !== -1 ;

       });
  }

searchType(){
  this.listOfDisplayData = this.filterData.filter( (item: any) => {
    return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
    item.version.indexOf(this.version) !== -1 &&
    item.date_debut.indexOf(this.startD) !== -1 &&
    item.date_fin.indexOf(this.endD) !== -1 &&
    item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
    item.langue.toLowerCase().indexOf(this.langue.toLowerCase()) !== -1 &&
    item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
    item.etat_session.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
    item.name.toLowerCase().indexOf(this.trainer.toLowerCase()) !== -1 ;

       });
}
searchLangue(){
  this.listOfDisplayData = this.filterData.filter( (item: any) => {
    return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
    item.version.indexOf(this.version) !== -1 &&
    item.date_debut.indexOf(this.startD) !== -1 &&
    item.date_fin.indexOf(this.endD) !== -1 &&
    item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
    item.langue.toLowerCase().indexOf(this.langue.toLowerCase()) !== -1 &&
    item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
    item.etat_session.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
    item.name.toLowerCase().indexOf(this.trainer.toLowerCase()) !== -1 ;

       });
}
searchPlace(){
  this.listOfDisplayData = this.filterData.filter( (item: any) => {
    return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
    item.version.indexOf(this.version) !== -1 &&
    item.date_debut.indexOf(this.startD) !== -1 &&
    item.date_fin.indexOf(this.endD) !== -1 &&
    item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
    item.langue.toLowerCase().indexOf(this.langue.toLowerCase()) !== -1 &&
    item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
    item.etat_session.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
    item.name.toLowerCase().indexOf(this.trainer.toLowerCase()) !== -1 ;

       });
}
searchState(){
  this.listOfDisplayData = this.filterData.filter( (item: any) => {
    return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
    item.version.indexOf(this.version) !== -1 &&
    item.date_debut.indexOf(this.startD) !== -1 &&
    item.date_fin.indexOf(this.endD) !== -1 &&
    item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
    item.langue.toLowerCase().indexOf(this.langue.toLowerCase()) !== -1 &&
    item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
    item.etat_session.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
    item.name.toLowerCase().indexOf(this.trainer.toLowerCase()) !== -1 ;

       });
}
searchTrainer(){
  this.listOfDisplayData = this.filterData.filter( (item: any) => {
    return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
    item.version.indexOf(this.version) !== -1 &&
    item.date_debut.indexOf(this.startD) !== -1 &&
    item.date_fin.indexOf(this.endD) !== -1 &&
    item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1 &&
    item.langue.toLowerCase().indexOf(this.langue.toLowerCase()) !== -1 &&
    item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
    item.etat_session.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
    item.name.toLowerCase().indexOf(this.trainer.toLowerCase()) !== -1 ;

       });
}
}
