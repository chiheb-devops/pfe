import { PlanningService } from 'src/app/admin/services/planning.service';
import { FournisseurService } from './../../../services/fournisseur.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {
  listOfData;
  listOfDisplayData;
  term = '';
  verifDataReady = true;
  tableReady = false;
  constructor( private fournissurService: FournisseurService, private planningService: PlanningService,
               private toastr: ToastrService){  }
  ngOnInit(): void {
      this.fetchFournisseur();
  }
  deleteFournisseur(id) {
    Swal.fire({
      title: 'Êtes vous sûr de vouloir supprimer ce fournisseur ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.fournissurService.deleteFournisseur(id).subscribe(
          (resp: any) => {
            if (!resp.success) {
              this.toastr.error('Erreur', resp.error);
            } else {
              this.planningService.editPlanningForDeleteProvider(id).subscribe(
                (r: any) => {
                  if (!r.success) {
                    this.toastr.error('Erreur', r.error);
                  }  }
                  );
              this.toastr.success('Succès');
              this.fetchFournisseur();
            }
          }
        );
      }
    });
  }

   fetchFournisseur(){
     this.fournissurService.getAllFournisseurWithoutAdress().subscribe( (data: any ) => {
      this.listOfData = data.results;
      this.tableReady = true;
      this.verifDataReady = false;
      this.listOfDisplayData = [...this.listOfData];
    });
   }

}
