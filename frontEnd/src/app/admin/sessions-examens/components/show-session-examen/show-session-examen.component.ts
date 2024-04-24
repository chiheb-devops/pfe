import { SessionExamenService } from './../../../services/session-examen.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-show-session-examen',
  templateUrl: './show-session-examen.component.html',
  styleUrls: ['./show-session-examen.component.css']
})
export class ShowSessionExamenComponent implements OnInit {
  id;
  Result ;
  Results ;
  dateYestarday;
   constructor(
    private sessionExamenService: SessionExamenService, private route: ActivatedRoute
   ) { }
   ngOnInit(): void {
     this.dateYestarday = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');
     this.id = this.route.snapshot.paramMap.get('id');
     this.sessionExamenService.getSessionWithEmailById(this.id).subscribe((data: any) => {
    this.Results = data.result[0];
        });
 }

}
