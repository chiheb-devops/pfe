import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormateurService } from 'src/app/admin/services/formateur.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-examinateur-inactive',
  templateUrl: './list-examinateur-inactive.component.html',
  styleUrls: ['./list-examinateur-inactive.component.css']
})
export class ListExaminateurInactiveComponent implements OnInit {
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
  constructor(private formateurService: FormateurService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchExaminateur();
  }
  ExaminateurReturnActive(id) {
    Swal.fire({
      title: 'Êtes vous sûr de vouloir activer cet examinateur ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.formateurService.ExaminateurReturnActive(id).subscribe(
          async (resp: any) => {
             if (!resp.success) {
               this.toastr.error('Erreur', resp.error);
             } else {
               this.toastr.success('Succès');
               this.fetchExaminateur();
             }
           }
         );
      }
    });
  }
  fetchExaminateur(){
    this.formateurService.getAllExaminateurInactive().subscribe((data: any) => {
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
