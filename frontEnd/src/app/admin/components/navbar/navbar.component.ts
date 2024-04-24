import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
role;
routeAdmin;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const decodedToken = this.authService.decodedJwt();
    this.role = decodedToken.role;
    if (this.role === 'Utilisateur' || this.role === 'Consultant'
       || this.role === 'Freelance' ) {
        this.routeAdmin = '/utilisateur';
      } else if (this.role === 'Instructeur' && decodedToken.examinateur !== 'oui' &&
      decodedToken.statut === 'active' ) {
        this.routeAdmin = '/formateur';
      }
      else if (this.role === 'Instructeur' && decodedToken.examinateur === 'oui' &&
      decodedToken.statut === 'active' ) {
        this.routeAdmin = '/examinateur/dashboard-cours';
      }
  }
  logOUT(): void  {
   this.authService.Logout();
   this.router.navigate(['/auth']);
  }
}
