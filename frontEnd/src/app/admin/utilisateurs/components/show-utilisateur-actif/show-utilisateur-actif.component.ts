import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormateurService } from 'src/app/admin/services/formateur.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { UtilisateurService } from 'src/app/admin/services/utilisateur.service';
@Component({
  selector: 'app-show-utilisateur-actif',
  templateUrl: './show-utilisateur-actif.component.html',
  styleUrls: ['./show-utilisateur-actif.component.css']
})
export class ShowUtilisateurActifComponent implements OnInit {
  id;
 Result ;
 allCertif = [];
 filtreAllCertif;
 filtreAllCv;
 allCv;
 allUser = [];
 ajouteur;
 ajouteurCV;
  constructor(
    private toastr: ToastrService,
    private utilisateurService: UtilisateurService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchFormateur(this.id);
    this.fetchAllUser();
  }
  changePassword(){
    Swal.fire({
      title: 'Êtes vous sûr de vouloir changer ce mot de passe ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.utilisateurService.changePassword(this.Result.id, this.Result.email).subscribe((resp: any) => {
          if (!resp.success) {
            this.toastr.error('Erreur', resp.error);
          } else {
            this.toastr.success('Succès');
          }
        });
      }
    });
  }
   fetchFormateur(id){
    this.utilisateurService.getUtilisateurById(id).subscribe((resp: any) => {
      this.Result = resp.result[0];
    });
   }
   fetchAllUser(){
    this.utilisateurService.getAllUser().subscribe((data: any) => {
      this.allUser = data.results;
      this.fetchCertifFormateur(this.id);
      this.fetchCvFormateur(this.id);
    });
   }
   fetchCertifFormateur(id){
    this.utilisateurService.getAllFormateurCertifById(id).subscribe((resp: any) => {
      this.allCertif = resp.result;
      if (this.allCertif) {
        this.filtreAllCertif = this.allCertif.filter(c => {
          this.ajouteur = [];
          if (c.id_ajouter == null) {
            return c;
          }
          else {
            this.ajouteur = this.allUser.filter(u => {
                return u.id === c.id_ajouter;
            });
            c.nom_ajouter = this.ajouteur[0].nom + ' ' + this.ajouteur[0].prenom;
            return c;
          }
       });
      }
    });
   }
   fetchCvFormateur(id){
    this.utilisateurService.getAllFormateurCvById(id).subscribe((resp: any) => {
      this.allCv = resp.result;
      if (this.allCv) {
        this.filtreAllCertif = this.allCv.filter(cv => {
          this.ajouteurCV = [];
          if (cv.id_ajouter == null) {
            return cv;
          }
          else {
            this.ajouteurCV = this.allUser.filter(us => {
                return us.id === cv.id_ajouter;
            });
            cv.nom_ajouter = this.ajouteurCV[0].nom + ' ' + this.ajouteurCV[0].prenom;
            return cv;
          }
       });
      }
    });
   }
   downloadCertif(name, email){
    Swal.fire({
      title: 'Êtes vous sûr de vouloir télécharger cette certification ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.utilisateurService.downloadCertifById(name, email).subscribe((resp: any) => {
          const file: Blob = new Blob([resp], {type: resp.type}); // replace the type by whatever type is your response

          const blob = window.URL.createObjectURL(file);
          const link = document.createElement('a');
          link.href = blob;
          link.download = name;
          link.click();

        });
      }
    });
   }
   downloadCv(name, email){
    Swal.fire({
      title: 'Êtes vous sûr de vouloir télécharger ce CV ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.utilisateurService.downloadCvById(name, email).subscribe((resp: any) => {
          const fileCv: Blob = new Blob([resp], {type: resp.type}); // replace the type by whatever type is your response

          const blobCV = window.URL.createObjectURL(fileCv);
          const linkCV = document.createElement('a');
          linkCV.href = blobCV;
          linkCV.download = name;
          linkCV.click();
        });
      }
    });
  }
}
