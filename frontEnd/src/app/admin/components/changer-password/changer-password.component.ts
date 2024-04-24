import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changer-password',
  templateUrl: './changer-password.component.html',
  styleUrls: ['./changer-password.component.css']
})
export class ChangerPasswordComponent implements OnInit {
  adminForm: FormGroup;
  submitted = false;
  fieldTextType: boolean;
  confFieldTextType: boolean;
  newFieldTextType: boolean;
  token;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      ancienpassword: ['', [Validators.required, Validators.minLength(6)]],
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmnewpassword: ['', [Validators.required]],
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.adminForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.adminForm.invalid) {
        return;
    }
    this.token = this.authService.returnToken();
    const user = {
      token: this.token,
      ancienpassword: this.adminForm.value.ancienpassword,
      newpassword: this.adminForm.value.newpassword,
    };
    this.authService.formateurChangerPassword(user).subscribe((resp: any) => {
        if (!resp.success) {
          this.toastr.error('Erreur', "Ancien mots de passe incorrect");
        } else {
          this.toastr.success('Succès');
          this.authService.Logout();
          this.router.navigate(['/auth/login']);
        }
      });
}
toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}
newtoggleFieldTextType() {
  this.newFieldTextType = !this.newFieldTextType;
}
ConfirmToggleFieldTextType() {
  this.confFieldTextType = !this.confFieldTextType;
}

}
