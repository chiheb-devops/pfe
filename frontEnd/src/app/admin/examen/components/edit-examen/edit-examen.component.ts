import { ExamenService } from './../../../services/examen.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/admin/services/categorie.service';
import {en_US, fr_FR, NzI18nService } from 'ng-zorro-antd/i18n';
import * as moment from 'moment';
@Component({
  selector: 'app-edit-examen',
  templateUrl: './edit-examen.component.html',
  styleUrls: ['./edit-examen.component.css']
})
export class EditExamenComponent implements OnInit {
  CoursForm: FormGroup;
  submitted = false;
  categories = [];
  id;
  Result;
  verifCategory = false;
  valueD;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private examenService: ExamenService,
    private categorieService: CategorieService,
    private route: ActivatedRoute,
    private i18n: NzI18nService
  ) { }

  ngOnInit(): void {
    this.i18n.setLocale(en_US);
    this.fetchCategorie();
    this.id = this.route.snapshot.paramMap.get("id");
    this.examenService.getCoursById(this.id).subscribe((resp: any) => {
      this.Result = resp.result[0];
      const autre = moment(this.Result.duree, 'HH:mm:ss');
      const valueHour = autre.format('HH');
      const valueMinute = autre.format('mm');
      this.valueD = new Date();
      this.valueD.setHours(valueHour);
      this.valueD.setMinutes(valueMinute);
      this.CoursForm.patchValue({
        ref_form: this.Result.ref_form,
        designation: this.Result.designation,
        duree: this.valueD,
        version: this.Result.version,
        categorie: this.Result.categorie
      });
    });

    this.CoursForm = this.formBuilder.group({
      ref_form: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      duree: [this.valueD, [Validators.required]],
      version: ['', ],
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
    const valueDuree = moment(this.CoursForm.value.duree).format('HH:mm');
    const cours = {
      ref_form: this.CoursForm.value.ref_form,
      designation: this.CoursForm.value.designation,
      duree: valueDuree,
      version: this.CoursForm.value.version || null,
      categorie: this.CoursForm.value.categorie,
    };
    this.examenService.updateCours(this.id, cours).subscribe((resp: any) => {
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
    this.categorieService.getAllCategories().subscribe((data: any) => {
      this.categories = data.results;
    });
   }

}
