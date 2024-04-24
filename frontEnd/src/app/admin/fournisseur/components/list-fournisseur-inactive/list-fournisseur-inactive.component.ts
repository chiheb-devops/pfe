import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/admin/services/fournisseur.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-fournisseur-inactive',
  templateUrl: './list-fournisseur-inactive.component.html',
  styleUrls: ['./list-fournisseur-inactive.component.css']
})
export class ListFournisseurInactiveComponent implements OnInit {
  listOfData;
  listOfDisplayData;
  term = '';
  verifDataReady = true;
  tableReady = false;
  constructor( private fournissurService: FournisseurService, private toastr: ToastrService){  }
  ngOnInit(): void {
      this.fetchFournisseur();
  }
   fetchFournisseur(){
     this.fournissurService.getAllFournisseurInactive().subscribe( (data: any ) => {
      this.listOfData = data.results;
      this.tableReady = true;
      this.verifDataReady = false;
      this.listOfDisplayData = [...this.listOfData];
    });
   }
   FournisseurReturnActive(id) {
    Swal.fire({
      title: "Êtes vous sûr de vouloir activer ce fournisseur ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.fournissurService.ReturnFournisseurActive(id).subscribe(
          async (resp: any) => {
             if (!resp.success) {
               this.toastr.error('Erreur', resp.error);
             } else {
               this.toastr.success('Succès');
               this.fetchFournisseur();
             }
           }
         );
      }
    });
  }
}
