import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { PlanningService } from 'src/app/admin/services/planning.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { SessionService } from 'src/app/admin/services/session.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-planning-calendar',
  templateUrl: './planning-calendar.component.html',
  styleUrls: ['./planning-calendar.component.css']
})
export class PlanningCalendarComponent implements OnInit {
  planning = [];
  allplanning = [];
  detail = [];
  planningEvent = [];
  traitementplanning = [];
  changeplanning = [];
  idPLanning;
  showModal = false;
  dateTodayVerif;
  calendarOptions: CalendarOptions;
  constructor(private planningService: PlanningService , private sessionService: SessionService,
              private toastr: ToastrService,
              ) {}
colors = ['#DDDDDD', '#DBC6C6', '#D7B2B2', '#C4C9DB', '#A9B4D3', '#D7D3C9', '#D6CDAB', '#C1D5D6', '#A9D5D9' ];
  ngOnInit(): void {
    this.dateTodayVerif = moment(new Date()).format('YYYY-MM-DD');
    this.fetchPlanning();
    this.planningService.getAllPlanningActiveForCalender().subscribe((data: any) => {
      this.planning = data.results;
      this.traitementplanning = this.planning.map(fd => {
       return { id: fd.id ,  title: fd.title ,
         start:  moment(fd.start).format('YYYY-MM-DD') , end: moment(fd.end).format('YYYY-MM-DD') ,
          backgroundColor: this.colors[Math.floor(Math.random() * this.colors.length)], textColor: '#000' , borderColor: '#d3dce3'};
      });
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        // bind is important!
        events: this.traitementplanning.map(f => {
          return f;
        }),
        editable: true,
        eventClick: (info) => {
          this.showModal = true;
          this.detail = [];
          this.detail = this.allplanning.filter(p => {
            return p.id === Number(info.event.id);
          });
        },
        eventChange: (info) => {
          if (this.dateTodayVerif < moment(info.oldEvent.start).format('YYYY-MM-DD') &&
          this.dateTodayVerif < moment(info.event.start).format('YYYY-MM-DD')) {
            Swal.fire({
              title: 'Êtes vous sûr de vouloir deplacer cet evenement ? ',
              showDenyButton: true,
              showCancelButton: false,
              confirmButtonText: `Oui`,
              denyButtonText: `Non`,
            }).then((result) => {
                if (result.isConfirmed) {
                  this.planningEvent = [];
                  this.planningEvent = this.allplanning.filter(pl => {
                    return pl.id === Number(info.event.id);
                  });
                  this.changeplanning = this.allplanning.filter(plan => {
                    return plan.email === this.planningEvent[0].email && plan.id !== this.planningEvent[0].id;
                  });
                  let verif = false;
                  for  (const plVerif of  this.changeplanning )  {
                    if (moment(plVerif.date_debut).isBetween(info.event.start, info.event.end , undefined, '[]') ||
                    moment(plVerif.date_fin).isBetween(info.event.start, info.event.end   , undefined, '[]')  ) {
                     verif = true ;
                     break;
                    } else {
                      verif = false;
                    }
                  }
                  if (!verif ) {
                  const session = {
                    id: this.planningEvent[0].id_session,
                    date_debut: moment(info.event.start).format('YYYY-MM-DD')
                    };
                  this.sessionService.updateSessionForCalendar(session).subscribe( async (resp: any) => {
                    if (!resp.success) {
                      this.toastr.error('Erreur', resp.error);
                    } else {
                      this.toastr.success('Succès');
                      const NEWdateD = new Date(info.event.start);
                      const convertduree: number = this.planningEvent[0].duree - 1;
                      NEWdateD.setDate(NEWdateD.getDate() + convertduree);
                      if (this.planningEvent[0].version !== null && this.planningEvent[0].version !== '') {
                      // rien
                    } else {
                      this.planningEvent[0].version = null;
                    }
                      if (this.planningEvent[0].type === 'présentielle') {
                      this.envoyerEmail(this.planningEvent[0].email, this.planningEvent[0].ref_formation,
                      moment(info.event.start).format('DD-MM-YYYY'), moment(NEWdateD).format('DD-MM-YYYY'),
                      this.planningEvent[0].type, this.planningEvent[0].langue, this.planningEvent[0].address_fournisseur,
                      this.planningEvent[0].version, this.planningEvent[0].statut_f, this.planningEvent[0].etat_session,
                      this.planningEvent[0].name, this.planningEvent[0].designation,
                      this.planningEvent[0].lieu, this.planningEvent[0].contact_for,
                     this.planningEvent[0].numero_for, this.planningEvent[0].mail_contact, this.planningEvent[0].nbr_participant);
                    } else {
                      this.envoyerEmailDistancielle(this.planningEvent[0].email, this.planningEvent[0].ref_formation,
                      moment(info.event.start).format('DD-MM-YYYY'), moment(NEWdateD).format('DD-MM-YYYY'),
                      this.planningEvent[0].type, this.planningEvent[0].langue,
                      this.planningEvent[0].version, this.planningEvent[0].statut_f, this.planningEvent[0].etat_session,
                      this.planningEvent[0].name, this.planningEvent[0].designation, this.planningEvent[0].contact_for,
                     this.planningEvent[0].numero_for, this.planningEvent[0].mail_contact, this.planningEvent[0].nbr_participant);
                    }
                  }
                });
                   } else {
                    Swal.fire("Désolé, tu n'a pas le droit à changer", '', 'info');
                    info.revert();
                   }
              }
              else{
                info.revert();
              }
            });
          } else {
            info.revert();
          }



        }
      };
    });
  }
  hide()
  {
    this.showModal = false;
  }
  fetchPlanning(){
    this.planningService.getAllPlanningForCalendar().subscribe((data: any) => {
      this.allplanning = data.results;
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
}
