import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TrainingExaminateurService } from 'src/app/services/training-examinateur.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Component({
  selector: 'app-ex-examen-realiser',
  templateUrl: './ex-examen-realiser.component.html',
  styleUrls: ['./ex-examen-realiser.component.css']
})
export class ExExamenRealiserComponent implements OnInit {
  listOfData;
  listOfDisplayData;
  term = '';
  token;
  detail;
  filterData = [];
  verifDataReady = true;
  tableReady = false;
  constructor(private authService: AuthService , private trainingService: TrainingExaminateurService,
              config: NgbModalConfig, private modalService: NgbModal){
              config.backdrop = 'static';
              config.keyboard = false;
                }
open(content, id) {
  this.detail = [];
  this.detail = this.listOfData .filter(p => {
        return p.id === id;
           });
  this.modalService.open(content, { scrollable: true });
    }
  ngOnInit(): void {
      this.fetchPlanning();
  }
  fetchPlanning(){
    this.token = this.authService.returnToken();
    const user = {
      token: this.token
    };
    this.trainingService.getAllExamenPastById(user).subscribe((data: any) => {
      this.listOfData = data.results;
      this.verifDataReady = false;
      this.tableReady = true;
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
        return i;
      });
    });
   }
}
