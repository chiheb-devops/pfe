import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { TrainingExaminateurService } from 'src/app/services/training-examinateur.service';
@Component({
  selector: 'app-ex-calender-examen',
  templateUrl: './ex-calender-examen.component.html',
  styleUrls: ['./ex-calender-examen.component.css']
})
export class ExCalenderExamenComponent implements OnInit {
  planning = [];
  traitementplanning = [];
  filterData;
  allplanning = [];
  showModal = false;
  detail = [];
  calendarOptions: CalendarOptions;
  token;
  colors = ['#DDDDDD', '#DBC6C6', '#D7B2B2', '#C4C9DB', '#A9B4D3', '#D7D3C9', '#D6CDAB', '#C1D5D6', '#A9D5D9' ];
  constructor(private authService: AuthService , private trainingService: TrainingExaminateurService) { }

  ngOnInit(): void {
    this.fetchAllPlanning();
    this.token = this.authService.returnToken();
    const user = {
      token: this.token
    };
    this.trainingService.getAllExamenforcalendarById(user).subscribe((data: any) => {
      this.planning = data.results;
      this.traitementplanning = this.planning.map(fd => {
       return { id: fd.id, title: fd.title , start:  moment(fd.start).format('YYYY-MM-DD') ,
        backgroundColor: this.colors[Math.floor(Math.random() * this.colors.length)], textColor: '#000' , borderColor: '#d3dce3'  };
      });

      this.calendarOptions = {
        initialView: 'dayGridMonth',
        // bind is important!
        events: this.traitementplanning.map(f => {
          return f;
        }),
        eventClick: (info) => {
          this.showModal = true;
          this.detail = [];
          this.detail = this.allplanning.filter(p => {
            return p.id === Number(info.event.id);
          });
        }
      };
    });
  }
  fetchAllPlanning(){
    this.token = this.authService.returnToken();
    const user = {
      token: this.token
    };
    this.trainingService.getAllExamenById(user).subscribe((data: any) => {
      this.allplanning = data.results;
      this.filterData = this.allplanning.filter( (i: any) => {
        i.date_examen = moment(i.date_examen).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
        i.date = moment(i.date_examen, 'DD-MM-YYYY HH:mm:ss');
        i.date = i.date.format('DD-MM-YYYY');
        i.heure_debut = moment(i.date_examen, 'DD-MM-YYYY HH:mm:ss');
        i.heure_debut = i.heure_debut.format('HH:mm');
        i.date_fin = moment(i.date_fin).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
        i.heure_fin = moment(i.date_fin, 'DD-MM-YYYY HH:mm:ss');
        i.heure_fin = i.heure_fin.format('HH:mm');
        i.heure = i.heure_debut + ' à ' +  i.heure_fin ;
        return i;
      });

    });
   }
   hide()
  {
    this.showModal = false;
  }
}
