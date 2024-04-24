import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  fieldTextType: boolean;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    const logedin = this.authService.admin();
    const formateur = this.authService.isLogedin();
    if (logedin) {
      this.router.navigate(['/admin']);
    }
    if (formateur) {
      this.router.navigate(['/formateur']);
    }
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.authService.auth(user).subscribe((resp: any) => {
      if (!resp.success) {
        this.toastr.error('Erreur', resp.message);
      } else if (resp.results[0].role === 'Administrateur') {
       this.toastr.success('Succès', null, {timeOut: 500});
       this.authService.saveUser(resp.token, resp.results[0]);
       this.router.navigate(['/admin/dashboard']);
     }  else if (resp.results[0].role === 'Utilisateur' || resp.results[0].role === 'Consultant'
       || resp.results[0].role === 'Freelance' ) {
        this.toastr.success('Succès', null, {timeOut: 500});
        this.authService.saveUser(resp.token, resp.results[0]);
        this.router.navigate(['/utilisateur']);
      } else if (resp.results[0].role === 'Instructeur' && resp.results[0].examinateur !== 'oui' &&
      resp.results[0].statut === 'active' ) {
        this.toastr.success('Succès', null, {timeOut: 500});
        this.router.navigate(['/formateur']);
        this.authService.saveUser(resp.token, resp.results[0]);
      }
      else if (resp.results[0].role === 'Instructeur' && resp.results[0].examinateur === 'oui' &&
      resp.results[0].statut === 'active' ) {
        this.toastr.success('Succès', null, {timeOut: 500});
        this.router.navigate(['/examinateur/dashboard-cours']);
        this.authService.saveUser(resp.token, resp.results[0]);
      }
      else if (resp.results[0].statut === 'inactive') {
        this.toastr.error("S'il vous plaît contacter l'adminstrateur");
      }
    });
}
toggleFieldTextType(): void {
  this.fieldTextType = !this.fieldTextType;
}
}
