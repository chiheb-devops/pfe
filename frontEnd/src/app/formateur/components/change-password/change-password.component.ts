import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  formateurForm: FormGroup;
  submitted = false;
  fieldTextType: boolean;
  confFieldTextType: boolean;
  newFieldTextType: boolean;
  token;
   isVisible: boolean;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.authService.sharedchangeModal.subscribe(m => this.isVisible = m);
    this.formateurForm = this.formBuilder.group({
      ancienpassword: ['', [Validators.required, Validators.minLength(6)]],
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmnewpassword: ['', [Validators.required]],
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.formateurForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.formateurForm.invalid) {
        return;
    }
    this.token = this.authService.returnToken();
    const user = {
      token: this.token,
      ancienpassword: this.formateurForm.value.ancienpassword,
      newpassword: this.formateurForm.value.newpassword,
    };
    this.authService.compteFormateurChangerPassword(user).subscribe((resp: any) => {
        if (!resp.success) {
          this.toastr.error('Erreur', 'Ancien mots de passe incorrect');
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
// start

handleCancel(): void {
  this.isVisible = false;
  this.authService.changeForModal(false);
}
}
