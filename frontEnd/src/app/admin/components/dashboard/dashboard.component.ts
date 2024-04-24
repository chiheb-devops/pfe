import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  roleAdmin;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const decodedToken = this.authService.decodedJwt();
    this.roleAdmin = decodedToken.roleAdmin;
  }

}
