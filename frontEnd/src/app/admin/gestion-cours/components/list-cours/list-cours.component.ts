import { SessionService } from 'src/app/admin/services/session.service';
import { CoursService } from './../../../services/cours.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.css']
})
export class ListCoursComponent implements OnInit {
  listOfData;
  listOfDisplayData;
  filterData = [];
  DataForEmail = [];
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
  constructor( private coursService: CoursService,
               private sessionService: SessionService,
               private toastr: ToastrService, private authService: AuthService){  }
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
  deleteCours(id): void {
    Swal.fire({
      title: 'Êtes vous sûr de vouloir supprimer ce cours ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.coursService.deleteCours(id).subscribe(
          (resp: any) => {
            if (!resp.success) {
              this.toastr.error("Erreur", resp.error);
            } else {
              this.sessionService.getAllSessionAffectedByIdCours(id).subscribe(
                (data: any) => {
                  if (!data.success) {
                    this.toastr.error("Erreur", data.error);
                  } else {
                    this.DataForEmail = data.results;
                   if (this.DataForEmail.length > 0) {
                    this.DataForEmail.forEach(element => {
                      this.sessionService.emailFormateurChanger(element.email, element.name,
                        element.ref_form, element.designation, moment(element.date_debut).format('DD-MM-YYYY'),
                        moment(element.date_fin).format('DD-MM-YYYY')).subscribe((f: any) => {
                     if (!f.success) {
                       this.toastr.error('Erreur', f.error);
                     }
                    });
                    });
                   }
                   this.sessionService.deleteSessionIdCours(id).subscribe(
                    (r: any) => {
                      if (!r.success) {
                        this.toastr.error("Erreur", r.error);
                      } }
                      );
                  this.toastr.success('Succès');
                  this.fetchCours();
                  } }
                  );
            }
          }
        );
      }
    });
  }

   fetchCours(){
    this.coursService.getAllCours().subscribe((data: any ) => {
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
