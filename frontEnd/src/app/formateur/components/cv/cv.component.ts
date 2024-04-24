import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/admin/services/formateur.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  allCv;
  id;
  Result ;
  filtreAllCv;
  allUser = [];
  ajouteur;
  email;
  ajouteurCV;
  filtreAllCertif;
  cv = [];
  constructor(
    private formateurService: FormateurService,
    private authService: AuthService,
    private toastr: ToastrService,
    config: NgbModalConfig, private modalService: NgbModal,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  openCV(contentCV): void {
    this.modalService.open(contentCV);
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
       this.fetchCvFormateur(this.id);
     });
    }
    fetchCvFormateur(id): void {
      this.formateurService.getAllFormateurCvById(id).subscribe((resp: any) => {
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
     downloadCv(name, email): void{
      Swal.fire({
        title: 'Êtes vous sûr de vouloir télécharger ce CV ?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Oui`,
        denyButtonText: `Non`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.formateurService.downloadCvById(name, email).subscribe((resp: any) => {
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
    onSubmitcv(): void{
      if (this.cv.length > 0) {
        this.modalService.dismissAll();
        let verifCV = 1;
        this.cv.forEach((c, index, array) => {
          const formDataCV = new FormData();
          formDataCV.append('file', c);
          this.formateurService.saveCvFormateur(this.email, this.id, formDataCV).subscribe((respoS: any) => {
            if (!respoS.success) {
              this.toastr.error('Erreur', respoS.error);
            } else{
              if (verifCV === 1) {
                this.toastr.success('Succès');
                verifCV = 2;
              }
              }
            if (index ===  array.length - 1) {
                this.fetchCvFormateur(this.id);
              }
          });
        });
      }
      this.cv = [];
     }
     selectcv(e): void{
      this.cv = [];
      if (e) {
      const selectCV = e;
      for (let i = 0; i < selectCV.length; i++){
           this.cv.push(selectCV[i]);
       }
      }
     }

}
