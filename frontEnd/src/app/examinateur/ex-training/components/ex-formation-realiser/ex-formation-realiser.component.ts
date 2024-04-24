import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TrainingExaminateurService } from 'src/app/services/training-examinateur.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Component({
  selector: 'app-ex-formation-realiser',
  templateUrl: './ex-formation-realiser.component.html',
  styleUrls: ['./ex-formation-realiser.component.css']
})
export class ExFormationRealiserComponent implements OnInit {
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
    this.trainingService.getAllTainingPastById(user).subscribe((data: any) => {
      this.listOfData = data.results;
      this.verifDataReady = false;
      this.tableReady = true;
      this.listOfDisplayData = [...this.listOfData];
      this.filterData = [];
      this.filterData = this.listOfData.filter( (i: any) => {
        i.date_debut = moment(i.date_debut).format('DD/MM/YYYY');
        i.date_fin = moment(i.date_fin).format('DD/MM/YYYY');
        return i;
      });
    });
   }
}
