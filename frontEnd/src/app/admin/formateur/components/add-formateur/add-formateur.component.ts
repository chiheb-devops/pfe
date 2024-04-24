import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FormateurService } from 'src/app/admin/services/formateur.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {
  FormateurForm: FormGroup;
  submitted = false;
  file = [];
  cv = [];
  id;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private formateurService: FormateurService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
   this.authService.getcurrentuser().subscribe((data: any) => {
      this.id = data.id;
    });
   this.FormateurForm = this.formBuilder.group({
    nom: ['', [Validators.required, this.trimValidator]],
    prenom: ['', [Validators.required, this.trimValidator]],
      email: ['', [Validators.required, Validators.email, this.trimValidator]],
      tele: ['', [Validators.required]],
      examinateur: ['' ],
      fonction: ['', [Validators.required, this.trimValidator]],
  });
  }

   // convenience getter for easy access to form fields
   get f()
    { return this.FormateurForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.FormateurForm.invalid) {
        return;
    }
    this.isLoading = true;
    let examinat;
    switch (this.FormateurForm.value.examinateur) {
      case true:
        examinat = 'oui';
        break;
        case 'oui':
          examinat = 'oui';
          break;
      default:
        examinat = 'non';
        break;
    }
    const formateur = {
      nom: this.FormateurForm.value.nom,
      prenom: this.FormateurForm.value.prenom,
      email: this.FormateurForm.value.email,
      tele: this.FormateurForm.value.tele,
      fonction: this.FormateurForm.value.fonction,
      examinateur: examinat
    };
    this.formateurService.saveFormateur(formateur).subscribe( async (resp: any) => {
      if (!resp.success) {
        this.toastr.error('Erreur', resp.error);
        this.isLoading = false;
      } else {
      if (this.file) {
      await this.file.forEach(f => {
          const formData = new FormData();
          formData.append('file', f);
          this.formateurService.saveCertifFormateur(formateur.email, this.id, formData).subscribe((respo: any) => {
            if (!respo.success) {
              this.toastr.error('Erreur', respo.error);
            }
          });
        });
      }
      if (this.cv) {
        this.cv.forEach(c => {
          const formDataCV = new FormData();
          formDataCV.append('file', c);
          this.formateurService.saveCvFormateur(formateur.email, this.id, formDataCV).subscribe((respoS: any) => {
            if (!respoS.success) {
              this.toastr.error('Erreur', respoS.error);
            }
          });
        });
      }
      this.toastr.success('Succès');
      this.router.navigate(['/admin/formateur/list-formateur']);
      }
    });
  }
  selectCertif(files){
    if (files) {
    const select = files;
    for (let index = 0; index < select.length; index++){
         this.file.push(select[index]);
     }
    }
  }
  selectcv(e){
    if (e) {
    const selectCV = e;
    for (let i = 0; i < selectCV.length; i++){
         this.cv.push(selectCV[i]);
     }
    }
  }
  trimValidator: ValidatorFn = (control: FormControl) => {
    if (control.value.startsWith(' ')) {
      return {
        'trimError': { value: 'control has leading whitespace' }
      };
    }
    if (control.value.endsWith(' ')) {
      return {
        'trimError2': { value: 'control has trailing whitespace' }
      };
    }
    return null;
  }
}
