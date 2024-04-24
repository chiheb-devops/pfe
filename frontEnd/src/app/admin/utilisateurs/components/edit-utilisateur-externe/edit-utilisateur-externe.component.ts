import { UtilisateurService } from './../../../services/utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-utilisateur-externe',
  templateUrl: './edit-utilisateur-externe.component.html',
  styleUrls: ['./edit-utilisateur-externe.component.css']
})
export class EditUtilisateurExterneComponent implements OnInit {
  editFormateurForm: FormGroup;
  submitted = false;
   id;
   idAdmin;
   Result;
   allCertif;
   allCv;
   file = [];
  cv = [];
  isLoading = false;
  isLoadingCertification = false;
  isLoadingCv = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private utilisateurService: UtilisateurService, config: NgbModalConfig, private modalService: NgbModal,
    private route: ActivatedRoute,  private authService: AuthService
  ) { config.backdrop = 'static';
      config.keyboard = false; }
      open(content): void {
        this.modalService.open(content);
      }
      openCV(contentCV): void {
        this.modalService.open(contentCV);
      }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.authService.getcurrentuser().subscribe((data: any) => {
      this.idAdmin = data.id;
    });
    this.fetchCertifFormateur(this.id);
    this.fetchCvFormateur(this.id);
    this.utilisateurService.getUtilisateurById(this.id).subscribe((resp: any) => {
      this.Result = resp.result[0];
      if (this.Result.role === 'Instructeur') {
      this.Result.showDiv = true;
    } else{
      this.Result.showDiv = false;
    }
      this.editFormateurForm.patchValue({
        nom: this.Result.nom,
        prenom: this.Result.prenom,
        email: this.Result.email,
        tele: this.Result.tele,
        fonction: this.Result.fonction,
        role: this.Result.role
      });
    });
    this.editFormateurForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        tele: ['', [Validators.required]],
        fonction: ['', [Validators.required]],
        role: ['', [Validators.required]],
    });
  }
  get f()
  { return this.editFormateurForm.controls; }

onSubmit(): void {
  this.submitted = true;
  // stop here if form is invalid
  if (this.editFormateurForm.invalid) {
      return;
  }
  this.isLoading = true;
  const editformateur = {
    nom: this.editFormateurForm.value.nom,
    prenom: this.editFormateurForm.value.prenom,
    email: this.editFormateurForm.value.email,
    tele: this.editFormateurForm.value.tele,
    fonction: this.editFormateurForm.value.fonction,
    role: this.editFormateurForm.value.role,
    roleAdmin: 'Pas de rôle',
     examinateur: 'non',
  };
  this.utilisateurService.editUtilisateur(this.id, editformateur).subscribe((resp: any) => {
    if (!resp.success) {
      this.toastr.error('Erreur', resp.error);
      this.isLoading = false;
    } else {
      this.toastr.success('Succès');
      this.router.navigate(['/admin/utilisateurs/list-utilisateurs-externe']);
    }
  });
}
fetchCertifFormateur(id): void {
  this.utilisateurService.getAllFormateurCertifById(id).subscribe((resp: any) => {
    this.allCertif = resp.result;
  });
 }
 fetchCvFormateur(id): void {
  this.utilisateurService.getAllFormateurCvById(id).subscribe((resp: any) => {
    this.allCv = resp.result;
  });
 }
 deleteCertif(name, email): void {
Swal.fire({
  title: 'Êtes vous sûr de vouloir supprimer cette certification ?',
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: `Oui`,
  denyButtonText: `Non`,
}).then((result) => {
  if (result.isConfirmed) {
    this.utilisateurService.deleteCertifById(name, email).subscribe((resp: any) => {
      if (!resp.success) {
        this.toastr.error('Erreur', resp);
      } else {
        this.fetchCertifFormateur(this.id);
        this.toastr.success('Succès');
      }
    });
  }
});
 }

 deletedCv(n, email): void {
  Swal.fire({
    title: 'Êtes vous sûr de vouloir supprimer ce cv ?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: `Oui`,
    denyButtonText: `Non`,
  }).then((result) => {
    if (result.isConfirmed) {
      this.utilisateurService.deleteCvById(n, email).subscribe((resp: any) => {
        if (!resp.success) {
          this.toastr.error('Erreur', resp);
        } else {
          this.fetchCvFormateur(this.id);
          this.toastr.success('Succès');
        }
      });
    }
  });
}
 onSubmitcertif(): void {
  if (this.file.length > 0) {
   this.isLoadingCertification = true;
   this.modalService.dismissAll();
   const email = this.Result.email;
   let verif = 1;
   this.file.forEach((f, index, array) => {
        const formData = new FormData();
        formData.append('file', f);
        this.utilisateurService.saveCertifUtilisateur(email, this.idAdmin, formData).subscribe((respo: any) => {
          if (!respo.success) {
            this.toastr.error('Erreur', respo.error);
            this.isLoadingCertification = false;
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
onSubmitcv(): void{
  if (this.cv.length > 0) {
    this.isLoadingCv = true;
    this.modalService.dismissAll();
    const emailCV = this.Result.email;
    let verifCV = 1;
    this.cv.forEach((c, index, array) => {
      const formDataCV = new FormData();
      formDataCV.append('file', c);
      this.utilisateurService.saveCvUtilisateur(emailCV, this.idAdmin, formDataCV).subscribe((respoS: any) => {
        if (!respoS.success) {
          this.toastr.error('Erreur', respoS.error);
          this.isLoadingCv = false;
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
selectCertif(files): void{
  this.file = [];
  if (files) {
  const select = files;
  for (let index = 0; index < select.length; index++){
       this.file.push(select[index]);
   }
  }
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
changeStatut(e): void {
  if (e && this.editFormateurForm.value.role ) {
    if (this.editFormateurForm.value.role === 'Instructeur') {
      this.Result.showDiv = true;
    } else {
      this.Result.showDiv = false;
    }
  }
}
}
