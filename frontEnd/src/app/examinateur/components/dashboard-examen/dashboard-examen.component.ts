import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TrainingExaminateurService } from 'src/app/services/training-examinateur.service';
@Component({
  selector: 'app-dashboard-examen',
  templateUrl: './dashboard-examen.component.html',
  styleUrls: ['./dashboard-examen.component.css']
})
export class DashboardExamenComponent implements OnInit {

  user: any;
  token;
  trainingnumber;
  trainingnumberByCategory = [];
  categories = [];
  verifDataReady = true;
  tableReady = false;
  verifDataReadyCategory = true;
  categoryReady = false;
  constructor(
    private authService: AuthService,
    private trainigService: TrainingExaminateurService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchCategorie();
    this.getNumberExamen();
    this.authService.getcurrentuser().subscribe((data: any) => {
      this.user = data;
    });
  }
  logOUT(){
   this.authService.Logout()
   this.router.navigate(["/auth"]);
  }
  getNumberExamen(){
    this.token = this.authService.returnToken();
    const user = {
      token: this.token
    };
    this.trainigService.getNumberExamen(user).subscribe((data: any) => {
     this.trainingnumber = data.results[0];
     this.verifDataReady = false;
     this.tableReady = true;
    });
   }
   getNumberExamenByCategory(cat){
    this.token = this.authService.returnToken();
    const user = {
      token: this.token,
      cat
    };
    this.trainigService.getNumberExamenByCategory(user).subscribe((data: any) => {
      this.trainingnumberByCategory.push(data.results[0]);

    });
   }
   async fetchCategorie(){
    this.trainigService.getAllCategorieActive().subscribe( async (data: any ) => {
      this.categories = data.results;
      this.categories.forEach(c => {
         this.getNumberExamenByCategory(c.nom_categorie);
       });
      this.verifDataReadyCategory = false;
      this.categoryReady = true;
    });
  }

}
