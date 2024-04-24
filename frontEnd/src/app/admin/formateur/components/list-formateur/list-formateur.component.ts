import { PlanningExamensService } from 'src/app/admin/services/planning-examens.service';
import { SessionExamenService } from 'src/app/admin/services/session-examen.service';
import { Component, OnInit  } from '@angular/core';
import { FormateurService } from 'src/app/admin/services/formateur.service';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/admin/services/session.service';
import { PlanningService } from 'src/app/admin/services/planning.service';
import Swal from 'sweetalert2';
import { UtilisateurService } from 'src/app/admin/services/utilisateur.service';
@Component({
  selector: 'app-list-formateur',
  templateUrl: './list-formateur.component.html',
  styleUrls: ['./list-formateur.component.css']
})
export class ListFormateurComponent implements OnInit {
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
constructor( private formateurService: FormateurService,
             private utilisateurService: UtilisateurService,
             private sessionService: SessionService,
             private sessionExamenService: SessionExamenService,
             private planningService: PlanningService,
             private planningXEamenService: PlanningExamensService,
             private toastr: ToastrService){  }
  ngOnInit(): void {
      this.fetchFormateur();
  }
  deleteFormateur(id): void  {
    Swal.fire({
      title: 'Êtes vous sûr de vouloir supprimer cet instructeur ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.utilisateurService.deleteUtilisateurInstructeur(id).subscribe(resp => {
          if (!resp.success) {
            this.toastr.error('Erreur', resp.error);
          } else {
            this.toastr.success('Succès');
            this.fetchFormateur();
          }
      });
/*
        this.formateurService.deleteFormateur(id).subscribe(
          async (resp: any) => {
             if (!resp.success) {
               this.toastr.error('Erreur', resp.error);
             } else {
               const resul = await this.DeleteFormateur(id, id);
               const resulDeux = await this.DeleteFormateurExamen(id);
               this.toastr.success('Succès');
               this.fetchFormateur();
             }
           }
         );*/
      }
    });
  }
fetchFormateur(): void {
    this.formateurService.getAllFormateur().subscribe((data: any) => {
      this.listOfData = data.results;
      this.tableReady = true;
      this.verifDataReady = false;
      this.listOfDisplayData = [...this.listOfData];
    });
   }
   DeleteFormateur(id, ID): void {
    this.planningService.deletePlanning(ID).subscribe((r: any) => {
      if (!r.success) {
        this.toastr.error('Erreur', r.error);
      }
      else {
        this.sessionService.deleteFormateurSession(ID).subscribe((respo: any) => {
          if (!respo.success) {
            this.toastr.error('Erreur', respo.error);
          }
            });
      }
        });
    }
    DeleteFormateurExamen(ID): void {
      this.planningXEamenService.deletePlanning(ID).subscribe((r: any) => {
        if (!r.success) {
          this.toastr.error('Erreur', r.error);
        }
        else {
          this.sessionExamenService.deleteFormateurSession(ID).subscribe((respo: any) => {
            if (!respo.success) {
              this.toastr.error('Erreur', respo.error);
            }
              });
        }
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
