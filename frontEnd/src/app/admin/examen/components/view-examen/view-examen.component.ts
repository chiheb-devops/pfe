import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from 'src/app/admin/services/examen.service';
@Component({
  selector: 'app-view-examen',
  templateUrl: './view-examen.component.html',
  styleUrls: ['./view-examen.component.css']
})
export class ViewExamenComponent implements OnInit {
  id;
 Result ;
  constructor(
    private examenService: ExamenService, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.examenService.getCoursById(this.id).subscribe((resp: any) => {
      this.Result = resp.result[0];
  });
}

}
