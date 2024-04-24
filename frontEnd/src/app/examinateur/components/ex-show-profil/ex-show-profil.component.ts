import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/admin/services/formateur.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-ex-show-profil',
  templateUrl: './ex-show-profil.component.html',
  styleUrls: ['./ex-show-profil.component.css']
})
export class ExShowProfilComponent implements OnInit {
  id;
  Result ;
   constructor(
     private formateurService: FormateurService,
     private authService: AuthService
   ) { }

   ngOnInit(): void {
     this.authService.getcurrentuser().subscribe((data: any) => {
      this.id = data.id;
      this.fetchFormateur(this.id);
    });
   }
    fetchFormateur(id): void{
     this.formateurService.getFormateurById(id).subscribe((resp: any) => {
       this.Result = resp.result[0];
     });
    }

}
