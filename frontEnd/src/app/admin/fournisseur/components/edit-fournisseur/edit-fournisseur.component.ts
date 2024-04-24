import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FournisseurService } from 'src/app/admin/services/fournisseur.service';
@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.css']
})
export class EditFournisseurComponent implements OnInit {
  FournisseurForm: FormGroup;
  submitted = false;
  submittedAdress = false;
  id;
  Result;
  fournisseurs;
  AddressForm: FormGroup;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private fournisseurService: FournisseurService,
    private route: ActivatedRoute
  ) {   }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchFournisseur();
    this.fournisseurService.getFournisseurById(this.id).subscribe((resp: any) => {
      this.Result = resp.result[0];
      this.FournisseurForm.patchValue({
        nom_fournisseur : this.Result.nom_fournisseur
      });
    });
    this.FournisseurForm = this.formBuilder.group({
      nom_fournisseur: ['', [Validators.required]],
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
      nom_fournisseur: this.FournisseurForm.value.nom_fournisseur
    };
    this.fournisseurService.updateFournisseur(this.id, fournisseur).subscribe((resp: any) => {
      if (!resp.success) {
        this.toastr.error('Erreur', resp.error);
        this.isLoading = false;
      } else {
        this.toastr.success('Succès');
        this.router.navigate(['/admin/fournisseur/list-fournisseur']);
      }
    });
  }
  fetchFournisseur(){
    this.fournisseurService.getFournisseurById(this.id).subscribe( (data: any ) => {
      this.fournisseurs = data.result;
    });
   }
}
