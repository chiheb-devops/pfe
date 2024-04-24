import { SessionService } from './../../../services/session.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent implements OnInit {
  listOfData = [];
  listOfDisplayData;
  filterData = [];
  DataForEmail = [];
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
  todayDate;
  verifDataReady = true;
  tableReady = false;
  role;
  constructor( private sessionService: SessionService, private authService: AuthService,
               private toastr: ToastrService){  }
  ngOnInit(): void {
    this.todayDate = moment(new Date()).format('YYYY-MM-DD');
    this.updateStautSession();
    const decodedToken = this.authService.decodedJwt();
    this.role = decodedToken.roleAdmin;
  }
  deleteSession(id, dateDebuts): void {
      Swal.fire({
        title: 'Êtes vous sûr de vouloir supprimer cette session ?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Oui`,
        denyButtonText: `Non`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.sessionService.deleteSession(id).subscribe(
            (resp: any) => {
              if (!resp.success) {
                this.toastr.error('Erreur', resp.error);
              } else {
                this.DataForEmail = this.listOfData.filter(x => {
                  return x.id == id; });
                if (this.DataForEmail[0].email) {
                    this.sessionService.emailFormateurChanger(this.DataForEmail[0].email, this.DataForEmail[0].name,
                      this.DataForEmail[0].ref_form, this.DataForEmail[0].designation, this.DataForEmail[0].date_debut,
                      this.DataForEmail[0].date_fin).subscribe((f: any) => {
                   if (!f.success) {
                     this.toastr.error('Erreur', f.error);
                   }
                  });
                  }
                this.toastr.success('Succès');
                this.fetchSession();
              }
            }
          );
        }
      });
  }

   fetchSession(){
    this.sessionService.getAllSession().subscribe((data: any ) => {
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
   updateStautSession(){
     this.sessionService.getAllSession().subscribe((data: any ) => {
      this.listOfData = data.results;
      if (this.listOfData.length === 0) {
        this.fetchSession();
      }
      this.listOfData.forEach((element, index, array) => {
        if (element.affecter !== null && element.etat_session === 'confirmée' &&
        moment(this.todayDate).isBetween(moment(element.date_debut).format('YYYY-MM-DD'),
         moment(element.date_fin).format('YYYY-MM-DD'), undefined, '[]') ) {
           this.sessionService.updateStatutSession(element.id, 'en cours').subscribe((resp: any ) => {
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
