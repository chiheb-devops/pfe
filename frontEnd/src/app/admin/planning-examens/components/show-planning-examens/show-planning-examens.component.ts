import { PlanningExamensService } from './../../../services/planning-examens.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-show-planning-examens',
  templateUrl: './show-planning-examens.component.html',
  styleUrls: ['./show-planning-examens.component.css']
})
export class ShowPlanningExamensComponent implements OnInit {
  id;
  Result ;
  dateToday;
   constructor(
    private planningExamenService: PlanningExamensService, private route: ActivatedRoute
   ) { }
   ngOnInit(): void {
     this.dateToday = moment(new Date()).add(-1, 'days').format('DD-MM-YYYY');
     this.id = this.route.snapshot.paramMap.get('id');
     this.planningExamenService.getPlanningById(this.id).subscribe( (resp: any) => {
       this.Result = resp.result[0];
       this.Result.date_examen = moment(this.Result.date_examen).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
       this.Result.date = moment(this.Result.date_examen, 'DD-MM-YYYY HH:mm:ss');
       this.Result.date = this.Result.date.format('DD-MM-YYYY');
       this.Result.heure_debut = moment(this.Result.date_examen, 'DD-MM-YYYY HH:mm:ss');
       this.Result.heure_debut = this.Result.heure_debut.format('HH:mm');
       this.Result.date_fin = moment(this.Result.date_fin).format('DD-MM-YYYY' + ' à ' + 'HH:mm:ss');
       this.Result.heure_fin = moment(this.Result.date_fin, 'DD-MM-YYYY HH:mm:ss');
       this.Result.heure_fin = this.Result.heure_fin.format('HH:mm');
       this.Result.heure = this.Result.heure_debut + ' à ' +  this.Result.heure_fin ;
   });
 }

}
