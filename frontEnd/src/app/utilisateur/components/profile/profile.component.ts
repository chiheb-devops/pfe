import { UtilisateurService } from 'src/app/admin/services/utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id;
  Result ;
  allCertif;
  allCv;
  filtreAllCertif;
  filtreAllCv;
  allUser = [];
  ajouteur;
  ajouteurCV;
   constructor(
     private utilisateurService: UtilisateurService,
     private authService: AuthService
   ) { }

   ngOnInit(): void {
     this.authService.getcurrentuser().subscribe((data: any) => {
      this.id = data.id;
      this.fetchFormateur(this.id);
    });
   }
    fetchFormateur(id): void {
     this.utilisateurService.getUtilisateurById(id).subscribe((resp: any) => {
       this.Result = resp.result[0];
     });
    }

   // start
   showModal(): void {
      this.authService.changeForModalUtilisateur(true);
  }

}
