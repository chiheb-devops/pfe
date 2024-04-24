import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { CategorieService } from 'src/app/admin/services/categorie.service';
@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  CategorieForm: FormGroup;
  submitted = false;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private categorieService: CategorieService
  ) { }

  ngOnInit(): void {
   this.CategorieForm = this.formBuilder.group({
    nom_categorie: ['', [Validators.required, this.trimValidator]],
  });
  }

   // convenience getter for easy access to form fields
   get f()
    { return this.CategorieForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.CategorieForm.invalid) {
        return;
    }
    this.isLoading = true;
    const categorie = {
      nom_categorie: this.CategorieForm.value.nom_categorie
    };
    this.categorieService.saveCategorie(categorie).subscribe((resp: any) => {
      if (!resp.success) {
        this.toastr.error("Erreur", resp.error);
        this.isLoading = false;
      } else {
        this.toastr.success('Succès');
        this.router.navigate(["/admin/cours/list-categorie"]);
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
