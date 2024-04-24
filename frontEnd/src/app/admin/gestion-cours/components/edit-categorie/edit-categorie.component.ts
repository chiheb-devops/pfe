import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { CategorieService } from 'src/app/admin/services/categorie.service';
@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {
  CategorieForm: FormGroup;
  submitted = false;
  id;
  Result;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private categorieService: CategorieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.categorieService.getCategorieById(this.id).subscribe((resp: any) => {
      this.Result = resp.result[0];
      this.CategorieForm.patchValue({
        nom_categorie: this.Result.nom_categorie
      });
    })
    this.CategorieForm = this.formBuilder.group({
    nom_categorie: ['', [Validators.required]],
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
    this.categorieService.updateCategorie(this.id, categorie).subscribe((resp: any) => {
      if (!resp.success) {
        this.toastr.error("Erreur", resp.error);
        this.isLoading = false;
      } else {
        this.toastr.success('Succès');
        this.router.navigate(["/admin/cours/list-categorie"]);
      }
    });
  }
}
