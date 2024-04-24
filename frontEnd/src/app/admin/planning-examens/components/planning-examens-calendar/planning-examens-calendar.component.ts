import { SessionExamenService } from 'src/app/admin/services/session-examen.service';
import { PlanningExamensService } from 'src/app/admin/services/planning-examens.service';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-planning-examens-calendar',
  templateUrl: './planning-examens-calendar.component.html',
  styleUrls: ['./planning-examens-calendar.component.css']
})
export class PlanningExamensCalendarComponent implements OnInit {
 planning = [];
  allplanning = [];
  detail = [];
  planningEvent = [];
  filterData = [];
  traitementplanning = [];
  changeplanning = [];
  idPLanning;
  showModal = false;
  dateTodayVerif;
  calendarOptions: CalendarOptions;
  tooltip;
  constructor(private planningExamenService: PlanningExamensService , private sessionExamenService: SessionExamenService,
              private toastr: ToastrService,
              ) {}
colors = ['#DDDDDD', '#DBC6C6', '#D7B2B2', '#C4C9DB', '#A9B4D3', '#D7D3C9', '#D6CDAB', '#C1D5D6', '#A9D5D9' ];
  ngOnInit(): void {
    this.dateTodayVerif = moment(new Date()).format('YYYY-MM-DD HH:mm');
    this.fetchPlanning();
    this.planningExamenService.getAllPlanningActiveForCalender().subscribe((data: any) => {
      this.planning = data.results;
      this.traitementplanning = this.planning.map(fd => {
       return { id: fd.id ,  title: fd.title ,
         start:  moment(fd.start).format('YYYY-MM-DD'),
         backgroundColor: this.colors[Math.floor(Math.random() * this.colors.length)], textColor: '#000' , borderColor: '#d3dce3'  };
      });
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        // bind is important!
        events: this.traitementplanning.map(f => {
          return f;
        },
        ),
        editable: true,
        eventClick: (info) => {
          this.showModal = true;
          this.detail = [];
          this.detail = this.allplanning.filter(p => {
            return p.id === Number(info.event.id);
          });
        },
        eventChange: (info) => {
          this.planningEvent = [];
          this.planningEvent = this.allplanning.filter(pl => {
            return pl.id === Number(info.event.id);
          });
          const dateT = info.event.start;
          const getHours = new Date(this.planningEvent[0].date_examen).getHours();
          const getMinutes = new Date(this.planningEvent[0].date_examen).getMinutes();
          dateT.setHours(getHours);
          dateT.setMinutes(getMinutes);
          this.planningEvent[0].eventStart =  dateT;
          if (this.dateTodayVerif < moment(this.planningEvent[0].date_examen).format('YYYY-MM-DD HH:mm') &&
          this.dateTodayVerif < moment(dateT).format('YYYY-MM-DD HH:mm')) {
            Swal.fire({
              title: 'Êtes vous sûr de vouloir deplacer cet evenement ? ',
              showDenyButton: true,
              showCancelButton: false,
              confirmButtonText: `Oui`,
              denyButtonText: `Non`,
            }).then((result) => {
                if (result.isConfirmed) {
                  this.changeplanning = this.allplanning.filter(plan => {
                    return plan.email === this.planningEvent[0].email && plan.id !== this.planningEvent[0].id;
                  });
                  let verif = false;
                  for  (const plVerif of  this.changeplanning )  {
                    if (moment(this.planningEvent[0].eventStart).isBetween(plVerif.date_examen,
                      plVerif.date_fin, undefined, '[)')  ) {
                     verif = true ;
                     break;
                    } else {
                      verif = false;
                    }
                  }
                  if (!verif ) {
                  const session = {
                    id: this.planningEvent[0].id_session,
                    date_examen: moment(this.planningEvent[0].eventStart).format('YYYY-MM-DD HH:mm')
                    };
                  this.sessionExamenService.updateSessionForCalendar(session).subscribe( async (resp: any) => {
                    if (!resp.success) {
                      this.toastr.error('Erreur', resp.error);
                    } else {
                      this.toastr.success('Succès');
                      this.fetchPlanning();
                      if (this.planningEvent[0].version !== null && this.planningEvent[0].version !== '') {
                      // rien
                    } else {
                      this.planningEvent[0].version = null;
                    }
                      this.envoyerEmail(this.planningEvent[0].email, this.planningEvent[0].ref_formation,
                        moment(this.planningEvent[0].eventStart).format('DD-MM-YYYY'), this.planningEvent[0].heure,
                         this.planningEvent[0].langue, this.planningEvent[0].version,
                         this.planningEvent[0].statut_f, this.planningEvent[0].etat_session,
                        this.planningEvent[0].name, this.planningEvent[0].designation,
                        this.planningEvent[0].lieu,  this.planningEvent[0].nbr_participant);
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
    this.planningExamenService.getAllPlanningForCalendar().subscribe((data: any) => {
      this.allplanning = data.results;
      this.filterData = this.allplanning.filter( (i: any) => {
        i.date_ex = moment(i.date_examen).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
        i.date = moment(i.date_ex, 'DD-MM-YYYY HH:mm:ss');
        i.date = i.date.format('DD-MM-YYYY');
        i.heure_debut = moment(i.date_ex, 'DD-MM-YYYY HH:mm:ss');
        i.heure_debut = i.heure_debut.format('HH:mm');
        i.date_f = moment(i.date_fin).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
        i.heure_fin = moment(i.date_f, 'DD-MM-YYYY HH:mm:ss');
        i.heure_fin = i.heure_fin.format('HH:mm');
        i.heure = i.heure_debut + ' à ' +  i.heure_fin ;
      });
    });
   }
   envoyerEmail(email, ref, dated, datef, langue, version, etat , etatsession,
    namef, namecours, pays,  nbrpartic){
    this.sessionExamenService.envoyerEmailFormateur(email, ref, dated, datef,
        langue, version, etat, etatsession,  namef, namecours,
        pays,  nbrpartic).subscribe((resp: any) => {
    if (!resp.success) {
        this.toastr.error('Error', resp.error);
      }
    });
   }
}
