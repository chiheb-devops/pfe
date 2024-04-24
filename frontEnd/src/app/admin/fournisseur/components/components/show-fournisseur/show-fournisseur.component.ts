import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/admin/services/fournisseur.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-show-fournisseur',
  templateUrl: './show-fournisseur.component.html',
  styleUrls: ['./show-fournisseur.component.css']
})
export class ShowFournisseurComponent implements OnInit {
  fournisseurs = [];
  id;

  constructor( private fournissurService: FournisseurService,  private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchFournisseur();
  }
   fetchFournisseur(){
    this.fournissurService.getFournisseurById(this.id).subscribe( (data: any ) => {
      this.fournisseurs = data.result;
    });
   }
}
