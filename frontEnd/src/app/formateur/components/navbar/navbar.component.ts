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
    this.role = decodedToken.roleAdmin;
    switch (this.role) {
        case 'Administrateur global':
        this.routeAdmin = '/admin/dashboard';
        break;
        case 'Administrateur des données d\'information':
        this.routeAdmin = '/admin/dashboard';
        break;
        case 'Administrateur d\'utilisateurs':
        this.routeAdmin = '/admin/dashboard';
        break;
        case 'Administrateur des sessions de formations/examens':
        this.routeAdmin = '/admin/dashboard';
        break;
        case 'Administrateur d\'allocation':
          this.routeAdmin = '/admin/dashboard';
          break;
    }
  }
  logOUT(): void {
    this.authService.Logout();
    this.router.navigate(['/auth']);
  }
}
