import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanningService } from 'src/app/admin/services/planning.service';
import * as moment from 'moment';
@Component({
  selector: 'app-show-planning',
  templateUrl: './show-planning.component.html',
  styleUrls: ['./show-planning.component.css']
})
export class ShowPlanningComponent implements OnInit {
  id;
  Result ;
  dateYestarday;
   constructor(
    private planningService: PlanningService, private route: ActivatedRoute
   ) { }
   ngOnInit(): void {
     this.dateYestarday = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');
     this.id = this.route.snapshot.paramMap.get('id');
     this.planningService.getPlanningById(this.id).subscribe( (resp: any) => {
       this.Result = resp.result[0];
   });
 }

}
