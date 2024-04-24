import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/admin/services/cours.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-cours',
  templateUrl: './view-cours.component.html',
  styleUrls: ['./view-cours.component.css']
})
export class ViewCoursComponent implements OnInit {
  id;
 Result ;
  constructor(
    private coursService: CoursService, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.coursService.getCoursById(this.id).subscribe((resp: any) => {
      this.Result = resp.result[0];
  });
}
}
