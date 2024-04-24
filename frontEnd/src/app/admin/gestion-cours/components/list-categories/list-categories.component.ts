import { SessionService } from './../../../services/session.service';
import { CoursService } from 'src/app/admin/services/cours.service';
import { CategorieService } from './../../../services/categorie.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NzTableLayout } from 'ng-zorro-antd/table';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  listOfData;
  listOfDisplayData;
  term = '';
  verifDataReady = true;
  tableReady = false;
  role;
  verifShowCategorie;
  constructor( private categorieService: CategorieService, private sessionService: SessionService,
               private coursService: CoursService,
               private toastr: ToastrService, private authService: AuthService){  }
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
  deleteCategorie(id, cat): void {
    Swal.fire({
      title: 'Êtes vous sûr de vouloir supprimer cette catégorie ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.categorieService.deleteCategorie(id).subscribe(
          (resp: any) => {
            if (!resp.success) {
              this.toastr.error("Erreur", resp.error);
            } else {
              this.coursService.CoursReturnInactive(cat).subscribe(
                (r: any) => {
                  if (!r.success) {
                    this.toastr.error("Erreur", r.error);
                  }});
              this.sessionService.deleteSessionByCategory(cat).subscribe(
                    (rs: any) => {
                      if (!rs.success) {
                        this.toastr.error("Erreur", rs.error);
                      }});
              this.toastr.success('Succès');
              this.fetchCategorie();
            }
          }
        );
      }
    });
  }

   fetchCategorie(){
    this.categorieService.getAllCategories().subscribe((data: any ) => {
      this.listOfData = data.results;
      this.tableReady = true;
      this.verifDataReady = false;
      this.listOfDisplayData = [...this.listOfData];
    });
   }

}
