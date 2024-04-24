import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/admin/services/categorie.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { CoursService } from 'src/app/admin/services/cours.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-list-categorie-inactive',
  templateUrl: './list-categorie-inactive.component.html',
  styleUrls: ['./list-categorie-inactive.component.css']
})
export class ListCategorieInactiveComponent implements OnInit {
  listOfData;
  listOfDisplayData;
  term = '';
  verifDataReady = true;
  tableReady = false;
  role;
  verifShowCategorie;
  constructor( private categorieService: CategorieService, private authService: AuthService,
               private coursService: CoursService, private toastr: ToastrService){  }
  ngOnInit(): void {
      this.fetchCategorie();
      const decodedToken = this.authService.decodedJwt();
      this.role = decodedToken.roleAdmin;
      if (this.role === 'Administrateur des sessions de formations/examens' || this.role === 'Administrateur d\'allocation') {
        this.verifShowCategorie = false;
      }else {
        this.verifShowCategorie = true;
      }
  }
   fetchCategorie(): void {
    this.categorieService.getAllCategoriesInactive().subscribe((data: any ) => {
      this.listOfData = data.results;
      this.tableReady = true;
      this.verifDataReady = false;
      this.listOfDisplayData = [...this.listOfData];
    });
   }
   categorieReturnActive(id, cat): void {
    Swal.fire({
      title: "Êtes vous sûr de vouloir activer cette catégorie ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.categorieService.CategorieReturnActive(id).subscribe(
          async (resp: any) => {
             if (!resp.success) {
               this.toastr.error('Erreur', resp.error);
             } else {
               this.coursService.CoursReturnActive(cat).subscribe(
                (r: any) => {
                  if (!r.success) {
                    this.toastr.error("Erreur", r.error);
                  }});
               this.toastr.success('Succès');
               this.fetchCategorie();
             }
           }
         );
      }
    });
   }

}
