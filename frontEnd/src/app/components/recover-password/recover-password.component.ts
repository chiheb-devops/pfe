import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from './../../services/auth.service';
@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  RecoverForm: FormGroup;
  submitted = false;
  fieldTextType: boolean;
  confFieldTextType: boolean;
  token;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService
    ) { }

  ngOnInit(): void {
/*
    const logedin = this.authService.admin();
    const formateur = this.authService.isLogedin();
    if (logedin) {
      this.router.navigate(['/admin']);
    }
    if (formateur) {
      this.router.navigate(['/formateur']);
    }*/
    this.token = this.route.snapshot.paramMap.get('token');
    this.RecoverForm = this.formBuilder.group({
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmnewpassword: ['', [Validators.required]],
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.RecoverForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.RecoverForm.invalid) {
        return;
    }
    const user = {
      token: this.token,
      newpassword: this.RecoverForm.value.newpassword,
    };
    this.authService.formateurChangerVotrePassword(user).subscribe((resp: any) => {
        if (!resp.success) {
          this.toastr.error('Erreur', resp.error);
        } else {
          this.toastr.success('Succès');
          this.router.navigate(['/auth/login']);
        }
      });
}
toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}
ConfirmToggleFieldTextType() {
  this.confFieldTextType = !this.confFieldTextType;
}
}
