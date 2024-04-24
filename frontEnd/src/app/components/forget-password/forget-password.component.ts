import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
             });
  }
  // convenience getter for easy access to form fields
  get f() { return this.forgetForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.forgetForm.invalid) {
        return;
    }
    const user = {
      email: this.forgetForm.value.email,

    };

    this.authService.forgetPassword(user.email).subscribe((resp: any) => {


      if (!resp.success) {
        this.toastr.error("Erreur", resp.message);
      } else {
        this.toastr.success("Vérifier Votre Adresse mail");
        this.router.navigate(["/login"]);
      }
    });




}
}
