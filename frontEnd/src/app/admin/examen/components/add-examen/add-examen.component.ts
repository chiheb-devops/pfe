import { ExamenService } from 'src/app/admin/services/examen.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/admin/services/categorie.service';
import * as moment from 'moment';
import {en_US, fr_FR, NzI18nService } from 'ng-zorro-antd/i18n';
@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit {
  CoursForm: FormGroup;
  submitted = false;
  verifCategory = false;
  categories = [];
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private examenService: ExamenService,
    private categorieService: CategorieService,
    private i18n: NzI18nService
  ) { }

  ngOnInit(): void {
    this.i18n.setLocale(en_US);
    this.fetchCategorie();
    this.CoursForm = this.formBuilder.group({
    ref_form: ['', [Validators.required, this.trimValidator]],
    designation: ['', [Validators.required, this.trimValidator]],
    duree: [, [Validators.required]],
    version: ['', this.trimValidator],
    categorie: ['', [Validators.required]],
  });
  }

   // convenience getter for easy access to form fields
   get f()
    { return this.CoursForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.CoursForm.invalid) {
        return;
    }
    this.isLoading = true;
    const valueD = moment(this.CoursForm.value.duree).format('HH:mm');
    const cours = {
      ref_form: this.CoursForm.value.ref_form,
      designation: this.CoursForm.value.designation,
      duree: valueD,
      version: this.CoursForm.value.version || null,
      categorie: this.CoursForm.value.categorie,
    };
    this.examenService.saveCours(cours).subscribe((resp: any) => {
      if (!resp.success) {
        this.toastr.error("Erreur", resp.error);
        this.isLoading = false;
      } else {
        this.toastr.success('Succès');
        this.router.navigate(['/admin/list-cours-examen/examen/list-examen']);
      }
    });
}
fetchCategorie(){
  this.categorieService.getAllCategories().subscribe((data: any ) => {
    this.categories = data.results;
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
