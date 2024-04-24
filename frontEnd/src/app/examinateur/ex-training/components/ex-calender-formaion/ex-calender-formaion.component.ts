import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { TrainingExaminateurService } from 'src/app/services/training-examinateur.service';
@Component({
  selector: 'app-ex-calender-formaion',
  templateUrl: './ex-calender-formaion.component.html',
  styleUrls: ['./ex-calender-formaion.component.css']
})
export class ExCalenderFormaionComponent implements OnInit {
  planning = [];
  traitementplanning = [];
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
    this.trainingService.getAllTainingForCalendarById(user).subscribe((data: any) => {
      this.planning = data.results;
      this.traitementplanning = this.planning.map(fd => {
       return { id: fd.id, title: fd.title , start:  moment(fd.start).format('YYYY-MM-DD') ,
       end: moment(fd.end).format('YYYY-MM-DD') ,
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
    this.trainingService.getAllTainingById(user).subscribe((data: any) => {
      this.allplanning = data.results;
    });
   }
   hide()
  {
    this.showModal = false;
  }
}
