import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormateurService } from 'src/app/admin/services/formateur.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-formateur-inactive',
  templateUrl: './list-formateur-inactive.component.html',
  styleUrls: ['./list-formateur-inactive.component.css']
})
export class ListFormateurInactiveComponent implements OnInit {
  listOfData;
  listOfDisplayData;
  term = '';
  firstname = '';
  lasttname = '';
  email = '';
  tele = '';
  fonction = '';
  roleAdmin = '';
  role = '';
  verifDataReady = true;
  tableReady = false;
  constructor(private formateurService: FormateurService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchFormateur();
  }
  FormateurReturnActive(id) {
    Swal.fire({
      title: "Êtes vous sûr de vouloir activer cet instructeur ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.formateurService.formateurReturnActive(id).subscribe(
          async (resp: any) => {
             if (!resp.success) {
               this.toastr.error('Erreur', resp.error);
             } else {
               this.toastr.success('Succès');
               this.fetchFormateur();
             }
           }
         );
      }
    });
  }
  fetchFormateur(): void {
    this.formateurService.getAllFormateurInactive().subscribe((data: any) => {
      this.listOfData = data.results;
      this.tableReady = true;
      this.verifDataReady = false;
      this.listOfDisplayData = [...this.listOfData];
    });
  }
  searchFirstName(): void {
    this.listOfDisplayData = this.listOfData.filter( (item) => {
      return item.nom.toLowerCase().indexOf(this.firstname.toLowerCase()) !== -1 &&
       item.prenom.toLowerCase().indexOf(this.lasttname.toLowerCase()) !== -1 &&
       item.email.toLowerCase().indexOf(this.email.toLowerCase()) !== -1 &&
       item.tele.toLowerCase().indexOf(this.tele.toLowerCase()) !== -1 &&
        item.fonction.toLowerCase().indexOf(this.fonction.toLowerCase()) !== -1 &&
        item.role.toLowerCase().indexOf(this.role.toLowerCase()) !== -1 &&
        item.roleAdmin.toLowerCase().indexOf(this.roleAdmin.toLowerCase()) !== -1 ;
    });
  }
  searchLasttName(): void {
    this.listOfDisplayData = this.listOfData.filter( (item) => {
      return item.nom.toLowerCase().indexOf(this.firstname.toLowerCase()) !== -1 &&
       item.prenom.toLowerCase().indexOf(this.lasttname.toLowerCase()) !== -1 &&
       item.email.toLowerCase().indexOf(this.email.toLowerCase()) !== -1 &&
       item.tele.toLowerCase().indexOf(this.tele.toLowerCase()) !== -1 &&
        item.fonction.toLowerCase().indexOf(this.fonction.toLowerCase()) !== -1 &&
        item.role.toLowerCase().indexOf(this.role.toLowerCase()) !== -1 &&
        item.roleAdmin.toLowerCase().indexOf(this.roleAdmin.toLowerCase()) !== -1 ;
    });
  }
  searchEmail(): void {
    this.listOfDisplayData = this.listOfData.filter( (item) => {
      return item.nom.toLowerCase().indexOf(this.firstname.toLowerCase()) !== -1 &&
       item.prenom.toLowerCase().indexOf(this.lasttname.toLowerCase()) !== -1 &&
       item.email.toLowerCase().indexOf(this.email.toLowerCase()) !== -1 &&
       item.tele.toLowerCase().indexOf(this.tele.toLowerCase()) !== -1 &&
        item.fonction.toLowerCase().indexOf(this.fonction.toLowerCase()) !== -1 &&
        item.role.toLowerCase().indexOf(this.role.toLowerCase()) !== -1 &&
        item.roleAdmin.toLowerCase().indexOf(this.roleAdmin.toLowerCase()) !== -1 ;
    });
  }
  searchTele(): void {
    this.listOfDisplayData = this.listOfData.filter( (item) => {
      return item.nom.toLowerCase().indexOf(this.firstname.toLowerCase()) !== -1 &&
       item.prenom.toLowerCase().indexOf(this.lasttname.toLowerCase()) !== -1 &&
       item.email.toLowerCase().indexOf(this.email.toLowerCase()) !== -1 &&
       item.tele.toLowerCase().indexOf(this.tele.toLowerCase()) !== -1 &&
        item.fonction.toLowerCase().indexOf(this.fonction.toLowerCase()) !== -1 &&
        item.role.toLowerCase().indexOf(this.role.toLowerCase()) !== -1 &&
        item.roleAdmin.toLowerCase().indexOf(this.roleAdmin.toLowerCase()) !== -1 ;
    });
  }
  searchFonction(): void {
    this.listOfDisplayData = this.listOfData.filter( (item) => {
      return item.nom.toLowerCase().indexOf(this.firstname.toLowerCase()) !== -1 &&
       item.prenom.toLowerCase().indexOf(this.lasttname.toLowerCase()) !== -1 &&
       item.email.toLowerCase().indexOf(this.email.toLowerCase()) !== -1 &&
       item.tele.toLowerCase().indexOf(this.tele.toLowerCase()) !== -1 &&
        item.fonction.toLowerCase().indexOf(this.fonction.toLowerCase()) !== -1 &&
        item.role.toLowerCase().indexOf(this.role.toLowerCase()) !== -1 &&
        item.roleAdmin.toLowerCase().indexOf(this.roleAdmin.toLowerCase()) !== -1 ;
    });
  }
  searchRole(): void {
    this.listOfDisplayData = this.listOfData.filter( (item) => {
      return item.nom.toLowerCase().indexOf(this.firstname.toLowerCase()) !== -1 &&
       item.prenom.toLowerCase().indexOf(this.lasttname.toLowerCase()) !== -1 &&
       item.email.toLowerCase().indexOf(this.email.toLowerCase()) !== -1 &&
       item.tele.toLowerCase().indexOf(this.tele.toLowerCase()) !== -1 &&
        item.fonction.toLowerCase().indexOf(this.fonction.toLowerCase()) !== -1 &&
        item.role.toLowerCase().indexOf(this.role.toLowerCase()) !== -1 &&
        item.roleAdmin.toLowerCase().indexOf(this.roleAdmin.toLowerCase()) !== -1 ;
    });
  }
  searchRoleAdmin(): void {
    this.listOfDisplayData = this.listOfData.filter( (item) => {
      return item.nom.toLowerCase().indexOf(this.firstname.toLowerCase()) !== -1 &&
       item.prenom.toLowerCase().indexOf(this.lasttname.toLowerCase()) !== -1 &&
       item.email.toLowerCase().indexOf(this.email.toLowerCase()) !== -1 &&
       item.tele.toLowerCase().indexOf(this.tele.toLowerCase()) !== -1 &&
        item.fonction.toLowerCase().indexOf(this.fonction.toLowerCase()) !== -1 &&
        item.role.toLowerCase().indexOf(this.role.toLowerCase()) !== -1 &&
        item.roleAdmin.toLowerCase().indexOf(this.roleAdmin.toLowerCase()) !== -1 ;
    });
  }
}
