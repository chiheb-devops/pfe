import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { SessionExamenService } from 'src/app/admin/services/session-examen.service';
@Component({
  selector: 'app-list-session-examen-inactive',
  templateUrl: './list-session-examen-inactive.component.html',
  styleUrls: ['./list-session-examen-inactive.component.css']
})
export class ListSessionExamenInactiveComponent implements OnInit {
  listOfData = [];
  listOfDisplayData;
  filterData = [];
  term = '';
  ref = '';
  version = '';
  startD = '';
  heure = '';
  type = '';
  langue = '';
  place = '';
  state = '';
  trainer = '';
  verifDataReady = true;
  tableReady = false;
  constructor( private sessionExamenService: SessionExamenService,  private toastr: ToastrService){  }
  ngOnInit(): void {
    this.updateStautSession();
  }
  updateStautSession(): void {
    this.sessionExamenService.getAllSessionActivePast().subscribe((data: any ) => {
     this.listOfData = data.results;
     if (this.listOfData.length === 0) {
      this.fetchSession();
    }
     this.listOfData.forEach((element, index, array) => {
       if (element.affecter !== null && element.etat_session === 'en cours' ) {
          this.sessionExamenService.updateStatutSession(element.id, 'clôturée').subscribe((resp: any ) => {
            if (index === array.length - 1) {
              this.fetchSession();
            }
            if (!resp.success) {
              this.toastr.error('Erreur', resp.error);
            }
          });
       }
       else{
        if (index === array.length - 1) {
          this.fetchSession();
        }
       }
     });
   });
  }

   fetchSession(){
    this.sessionExamenService.getAllSessionActivePast().subscribe((data: any ) => {
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
 item.date.indexOf(this.startD) !== -1 &&
 item.heure.indexOf(this.heure) !== -1 &&
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
      item.date.indexOf(this.startD) !== -1 &&
      item.heure.indexOf(this.heure) !== -1 &&
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
    item.date.indexOf(this.startD) !== -1 &&
    item.heure.indexOf(this.heure) !== -1 &&
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
    item.date.indexOf(this.startD) !== -1 &&
    item.heure.indexOf(this.heure) !== -1 &&
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
    item.date.indexOf(this.startD) !== -1 &&
    item.heure.indexOf(this.heure) !== -1 &&
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
    item.date.indexOf(this.startD) !== -1 &&
    item.heure.indexOf(this.heure) !== -1 &&
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
    item.date.indexOf(this.startD) !== -1 &&
    item.heure.indexOf(this.heure) !== -1 &&
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
    item.date.indexOf(this.startD) !== -1 &&
    item.heure.indexOf(this.heure) !== -1 &&
    item.langue.toLowerCase().indexOf(this.langue.toLowerCase()) !== -1 &&
    item.lieu.toLowerCase().indexOf(this.place.toLowerCase()) !== -1 &&
    item.etat_session.toLowerCase().indexOf(this.state.toLowerCase()) !== -1 &&
    item.name.toLowerCase().indexOf(this.trainer.toLowerCase()) !== -1 ;

       });
}

}
