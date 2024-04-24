import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoursService } from 'src/app/admin/services/cours.service';
import { CategorieService } from 'src/app/admin/services/categorie.service';
@Component({
  selector: 'app-edit-cours',
  templateUrl: './edit-cours.component.html',
  styleUrls: ['./edit-cours.component.css']
})
export class EditCoursComponent implements OnInit {
  CoursForm: FormGroup;
  submitted = false;
  categories = [];
  id;
  Result;
  verifCategory = false;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private coursService: CoursService,
    private categorieService: CategorieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchCategorie()
    this.id = this.route.snapshot.paramMap.get("id");
    this.coursService.getCoursById(this.id).subscribe((resp: any) => {
      this.Result = resp.result[0];
      this.CoursForm.patchValue({
        ref_form: this.Result.ref_form,
        designation: this.Result.designation,
        duree: this.Result.duree,
        version: this.Result.version,
        categorie: this.Result.categorie
      });
    });
    this.CoursForm = this.formBuilder.group({
      ref_form: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      duree: ['', [Validators.required]],
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
    const cours = {
      ref_form: this.CoursForm.value.ref_form,
      designation: this.CoursForm.value.designation,
      duree: this.CoursForm.value.duree,
      version: this.CoursForm.value.version || null,
      categorie: this.CoursForm.value.categorie,
    };
    this.coursService.updateCours(this.id, cours).subscribe((resp: any) => {
      if (!resp.success) {
        this.toastr.error("Erreur", resp.error);
        this.isLoading = false;
      } else {
        this.toastr.success('Succès');
        this.router.navigate(["/admin/cours/list-cours"]);
      }
    });
  }
  fetchCategorie(){
    this.categorieService.getAllCategories().subscribe((data: any) => {
      this.categories = data.results;
    });
   }
}
