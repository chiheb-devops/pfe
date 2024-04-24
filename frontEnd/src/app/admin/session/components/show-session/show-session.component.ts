import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/admin/services/session.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-show-session',
  templateUrl: './show-session.component.html',
  styleUrls: ['./show-session.component.css']
})
export class ShowSessionComponent implements OnInit {
  id;
  Result ;
  Results ;
  dateYestarday;
   constructor(
    private sessionService: SessionService, private route: ActivatedRoute
   ) { }
   ngOnInit(): void {
     this.dateYestarday = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');
     this.id = this.route.snapshot.paramMap.get('id');
     this.sessionService.getSessionWithEmailById(this.id).subscribe((data: any) => {
    this.Results = data.result[0];
        });
 }

}
