import { PlanningExamensService } from 'src/app/admin/services/planning-examens.service';
import { SessionExamenService } from 'src/app/admin/services/session-examen.service';
import { UtilisateurService } from 'src/app/admin/services/utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { SessionService } from 'src/app/admin/services/session.service';
import { PlanningService } from 'src/app/admin/services/planning.service';

@Component({
  selector: 'app-utilisateur-externe',
  templateUrl: './utilisateur-externe.component.html',
  styleUrls: ['./utilisateur-externe.component.css']
})
export class UtilisateurExterneComponent implements OnInit {
  listOfData;
  listOfDisplayData;
  term = '';
  firstname = '';
  lasttname = '';
  email = '';
  tele = '';
  fonction = '';
  role = '';
  roleAdmin = '';
  verifDataReady = true;
  tableReady = false;
  utilisateurForDelete;
constructor( private utilisateurService: UtilisateurService,
             private sessionService: SessionService,
             private planningService: PlanningService,
             private planningXEamenService: PlanningExamensService,
             private sessionExamenService: SessionExamenService,
             private toastr: ToastrService){  }
  ngOnInit(): void {
      this.fetchUtilisateurs();
  }
  deleteUtilisateur(id): void  {
    Swal.fire({
      title: 'Êtes vous sûr de vouloir supprimer cet utilisateur ?',
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
            this.fetchUtilisateurs();
          }
      });
        /*
         this.utilisateurForDelete = this.listOfData.filter((el: any) => {
           return el.id === id;
         });
         if (this.utilisateurForDelete) {
          this.utilisateurService.deleteUtilisateur(id, this.utilisateurForDelete[0].role).subscribe(
            async (resp: any) => {
               if (!resp.success) {
                 this.toastr.error('Erreur', resp.error);
               } else {
                 if (this.utilisateurForDelete[0].role === 'Instructeur') {
                  const resul = await this.DeleteUtilisateur(id);
                  const resulDeux = await this.DeleteUtilisateurExamen(id);
                 }
                 this.toastr.success('Succès');
                 this.fetchUtilisateurs();
               }
             }
           );
         }*/
      }
    });
  }
fetchUtilisateurs(): void{
    this.utilisateurService.getAllFormateurExterne().subscribe((data: any) => {
      this.listOfData = data.results;
      this.tableReady = true;
      this.verifDataReady = false;
      this.listOfDisplayData = [...this.listOfData];
    });
   }
   DeleteUtilisateur(ID): void {
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
    DeleteUtilisateurExamen(ID): void {
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
