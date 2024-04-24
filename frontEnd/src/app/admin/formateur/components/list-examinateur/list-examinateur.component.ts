import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/admin/services/formateur.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { UtilisateurService } from 'src/app/admin/services/utilisateur.service';
@Component({
  selector: 'app-list-examinateur',
  templateUrl: './list-examinateur.component.html',
  styleUrls: ['./list-examinateur.component.css']
})
export class ListExaminateurComponent implements OnInit {
  listOfData;
  listOfDisplayData;
  term = '';
  firstname = '';
  lasttname = '';
  email = '';
  tele = '';
  fonction = '';
  verifDataReady = true;
  tableReady = false;
constructor( private formateurService: FormateurService,
             private utilisateurService: UtilisateurService,
             private toastr: ToastrService){  }
  ngOnInit(): void {
      this.fetchExaminateur();
  }
  deleteExaminateur(id): void  {
    Swal.fire({
      title: 'Êtes vous sûr de vouloir desactiver cet examinateur ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.utilisateurService.deleteUtilisateurExaminateur(id).subscribe(resp => {
          if (!resp.success) {
            this.toastr.error('Erreur', resp.error);
          } else {
            this.toastr.success('Succès');
            this.fetchExaminateur();
          }
      });
        /*
        this.formateurService.deleteExaminateur(id).subscribe(
          async (resp: any) => {
             if (!resp.success) {
               this.toastr.error('Erreur', resp.error);
             } else {
               this.toastr.success('Succès');
               this.fetchExaminateur();
             }
           }
         );*/
      }
    });
  }
fetchExaminateur(){
    this.formateurService.getAllExaminateur().subscribe((data: any) => {
      this.listOfData = data.results;
      this.tableReady = true;
      this.verifDataReady = false;
      this.listOfDisplayData = [...this.listOfData];
    });
   }
    searchFirstName(){
      this.listOfDisplayData = this.listOfData.filter( (item) => {
        return item.nom.toLowerCase().indexOf(this.firstname.toLowerCase()) !== -1 &&
         item.prenom.toLowerCase().indexOf(this.lasttname.toLowerCase()) !== -1 &&
         item.email.toLowerCase().indexOf(this.email.toLowerCase()) !== -1 &&
         item.tele.toLowerCase().indexOf(this.tele.toLowerCase()) !== -1 &&
          item.fonction.toLowerCase().indexOf(this.fonction.toLowerCase()) !== -1 ;
      });
    }
    searchLasttName(){
      this.listOfDisplayData = this.listOfData.filter( (item) => {
        return item.nom.toLowerCase().indexOf(this.firstname.toLowerCase()) !== -1 &&
         item.prenom.toLowerCase().indexOf(this.lasttname.toLowerCase()) !== -1 &&
         item.email.toLowerCase().indexOf(this.email.toLowerCase()) !== -1 &&
         item.tele.toLowerCase().indexOf(this.tele.toLowerCase()) !== -1 &&
          item.fonction.toLowerCase().indexOf(this.fonction.toLowerCase()) !== -1 ;
      });
    }
    searchEmail(){
      this.listOfDisplayData = this.listOfData.filter( (item) => {
        return item.nom.toLowerCase().indexOf(this.firstname.toLowerCase()) !== -1 &&
         item.prenom.toLowerCase().indexOf(this.lasttname.toLowerCase()) !== -1 &&
         item.email.toLowerCase().indexOf(this.email.toLowerCase()) !== -1 &&
         item.tele.toLowerCase().indexOf(this.tele.toLowerCase()) !== -1 &&
          item.fonction.toLowerCase().indexOf(this.fonction.toLowerCase()) !== -1 ;
      });
    }
    searchTele(){
      this.listOfDisplayData = this.listOfData.filter( (item) => {
        return item.nom.toLowerCase().indexOf(this.firstname.toLowerCase()) !== -1 &&
         item.prenom.toLowerCase().indexOf(this.lasttname.toLowerCase()) !== -1 &&
         item.email.toLowerCase().indexOf(this.email.toLowerCase()) !== -1 &&
         item.tele.toLowerCase().indexOf(this.tele.toLowerCase()) !== -1 &&
          item.fonction.toLowerCase().indexOf(this.fonction.toLowerCase()) !== -1 ;
      });
    }
}
