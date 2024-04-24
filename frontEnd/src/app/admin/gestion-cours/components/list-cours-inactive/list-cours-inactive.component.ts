import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/admin/services/cours.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-list-cours-inactive',
  templateUrl: './list-cours-inactive.component.html',
  styleUrls: ['./list-cours-inactive.component.css']
})
export class ListCoursInactiveComponent implements OnInit {
  listOfData;
  listOfDisplayData;
  filterData = [];
  term = '';
  ref = '';
  desig = '';
  categ = '';
  vers = '';
  duree = '';
  verifDataReady = true;
  tableReady = false;
  role;
  verifShowCategorie;
  constructor( private coursService: CoursService,  private toastr: ToastrService, private authService: AuthService){  }
  ngOnInit(): void {
      this.fetchCours();
      const decodedToken = this.authService.decodedJwt();
      this.role = decodedToken.roleAdmin;
      if (this.role === 'Administrateur des sessions de formations/examens' || this.role === 'Administrateur d\'allocation') {
        this.verifShowCategorie = false;
      }else {
        this.verifShowCategorie = true;
      }
  }
   fetchCours(){
    this.coursService.getAllCoursInactive().subscribe((data: any) => {
      this.listOfData = data.results;
      this.tableReady = true;
      this.verifDataReady = false;
      this.listOfDisplayData = [...this.listOfData];
      this.filterData = [];
      this.filterData = this.listOfData.filter( (i: any) => {
      if (i.version == null) {
        i.version = '';
        return i;
      } else {
        return i;
      }});
    });
   }
   CoursReturnActive(id) {
    Swal.fire({
      title: "Êtes vous sûr de vouloir activer ce cours ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.coursService.ReturnCoursActiveById(id).subscribe(
          async (resp: any) => {
             if (!resp.success) {
               this.toastr.error('Erreur', resp.error);
             } else {
               this.toastr.success('Succès');
               this.fetchCours();
             }
           }
         );
      }
    });
  }
   searchRef(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
 return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
 item.designation.toLowerCase().indexOf(this.desig.toLowerCase()) !== -1 &&
 item.categorie.toLowerCase().indexOf(this.categ.toLowerCase()) !== -1 &&
 item.duree.toLowerCase().indexOf(this.duree.toLowerCase()) !== -1 &&
((item.version !== '') ? item.version.toLowerCase().indexOf(this.vers.toLowerCase()) !== -1 : item.version.indexOf(this.vers) !== -1)  ;

    });
  }
  searchDesig(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.designation.toLowerCase().indexOf(this.desig.toLowerCase()) !== -1 &&
      item.categorie.toLowerCase().indexOf(this.categ.toLowerCase()) !== -1 &&
      item.duree.toLowerCase().indexOf(this.duree.toLowerCase()) !== -1 &&
     ((item.version !== '') ? item.version.toLowerCase().indexOf(this.vers.toLowerCase()) !== -1 : item.version.indexOf(this.vers) !== -1);
         });
  }
  searchCateg(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.designation.toLowerCase().indexOf(this.desig.toLowerCase()) !== -1 &&
      item.categorie.toLowerCase().indexOf(this.categ.toLowerCase()) !== -1 &&
      item.duree.toLowerCase().indexOf(this.duree.toLowerCase()) !== -1 &&
     ((item.version !== '') ? item.version.toLowerCase().indexOf(this.vers.toLowerCase()) !== -1 : item.version.indexOf(this.vers) !== -1);
         });
  }
  searchVersion(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.designation.toLowerCase().indexOf(this.desig.toLowerCase()) !== -1 &&
      item.categorie.toLowerCase().indexOf(this.categ.toLowerCase()) !== -1 &&
      item.duree.toLowerCase().indexOf(this.duree.toLowerCase()) !== -1 &&
     ((item.version !== '') ? item.version.toLowerCase().indexOf(this.vers.toLowerCase()) !== -1 : item.version.indexOf(this.vers) !== -1);
         });
  }
  searchDuration(){
    this.listOfDisplayData = this.filterData.filter( (item: any) => {
      return item.ref_form.toLowerCase().indexOf(this.ref.toLowerCase()) !== -1 &&
      item.designation.toLowerCase().indexOf(this.desig.toLowerCase()) !== -1 &&
      item.categorie.toLowerCase().indexOf(this.categ.toLowerCase()) !== -1 &&
      item.duree.toLowerCase().indexOf(this.duree.toLowerCase()) !== -1 &&
     ((item.version !== '') ? item.version.toLowerCase().indexOf(this.vers.toLowerCase()) !== -1 : item.version.indexOf(this.vers) !== -1);
         });
}
}
