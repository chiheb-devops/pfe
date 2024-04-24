import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/admin/services/formateur.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  allCertif;
  id;
  Result ;
  filtreAllCertif;
  allUser = [];
  ajouteur;
  email;
  file = [];
  constructor(
    private formateurService: FormateurService,
    private authService: AuthService,
    private toastr: ToastrService,
    config: NgbModalConfig, private modalService: NgbModal,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content): void {
    this.modalService.open(content);
  }
  ngOnInit(): void {
    this.authService.getcurrentuser().subscribe((data: any) => {
      this.id = data.id;
      this.email = data.email;
      this.fetchFormateur(this.id);
      this.fetchAllUser();
    });
  }
  fetchFormateur(id): void {
    this.formateurService.getFormateurById(id).subscribe((resp: any) => {
      this.Result = resp.result[0];
    });
   }
   fetchAllUser(): void {
     this.formateurService.getAllUser().subscribe((data: any) => {
       this.allUser = data.results;
       this.fetchCertifFormateur(this.id);
     });
    }
   fetchCertifFormateur(id): void {
    this.formateurService.getAllFormateurCertifById(id).subscribe((resp: any) => {
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
   downloadCertif(name, email): void {
    Swal.fire({
      title: 'Êtes vous sûr de vouloir télécharger cette certification ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Oui`,
      denyButtonText: `Non`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.formateurService.downloadCertifById(name, email).subscribe((resp: any) => {
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
    onSubmitcertif(): void {
    if (this.file.length > 0) {
     this.modalService.dismissAll();
     let verif = 1;
     this.file.forEach((f, index, array) => {
          const formData = new FormData();
          formData.append('file', f);
          this.formateurService.saveCertifFormateur(this.email, this.id, formData).subscribe((respo: any) => {
            if (!respo.success) {
              this.toastr.error('Erreur', respo.error);
            }else{
            if (verif === 1) {
              this.toastr.success('Succès');
              verif = 2;
            }
            }
            if (index === array.length - 1) {
              this.fetchCertifFormateur(this.id);
            }
          });

        })
      }
    this.file = [];
   }
   selectCertif(files): void {
    this.file = [];
    if (files) {
    const select = files;
    for (let index = 0; index < select.length; index++){
         this.file.push(select[index]);
     }
    }
   }

}
