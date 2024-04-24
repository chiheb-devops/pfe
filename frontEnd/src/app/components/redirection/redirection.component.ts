import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.css']
})
export class RedirectionComponent implements OnInit {
  role;
    constructor(
      private authService: AuthService,
      private router: Router
    ) { }
    ngOnInit(): void {
      const decodedToken = this.authService.decodedJwt();
      if (decodedToken) {
        this.role = decodedToken.role;
      }
      if (this.role) {
      if (this.role === 'Utilisateur' || this.role === 'Consultant'
      || this.role === 'Freelance' ) {
       this.router.navigate(['/utilisateur']);
     } else if (this.role === 'Instructeur' && decodedToken.examinateur !== 'oui') {
       this.router.navigate(['/formateur']);
     }
     else if (this.role === 'Instructeur' && decodedToken.examinateur === 'oui') {
       this.router.navigate(['/examinateur/dashboard-cours']);
     }
     else if (this.role === 'Administrateur') {
       this.router.navigate(['/admin/dashboard']);
     }
     } else {
      this.authService.Logout();
      this.router.navigate(['/auth']);
     }
    }

}
