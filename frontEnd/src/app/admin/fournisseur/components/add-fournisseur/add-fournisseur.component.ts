import { FournisseurService } from './../../../services/fournisseur.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  FournisseurForm: FormGroup;
  submitted = false;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private fournisseurService: FournisseurService
  ) { }

  ngOnInit(): void {
    this.FournisseurForm = this.formBuilder.group({
    nom_fournisseur: ['', [Validators.required, this.trimValidator]],
  });
  }

   // convenience getter for easy access to form fields
   get f()
    { return this.FournisseurForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.FournisseurForm.invalid) {
        return;
    }
    this.isLoading = true;
    const fournisseur = {
      nom_fournisseur: this.FournisseurForm.value.nom_fournisseur,
    };
    this.fournisseurService.saveFournisseur(fournisseur).subscribe((resp: any) => {
      if (!resp.success) {
        this.toastr.error('Erreur', resp.error);
        this.isLoading = false;
      } else {
        this.toastr.success('Succès');
        this.router.navigate(['/admin/fournisseur/list-fournisseur']);
      }
    });
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
