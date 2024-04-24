import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ex-profil',
  templateUrl: './ex-profil.component.html',
  styleUrls: ['./ex-profil.component.css']
})
export class ExProfilComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
 // start
 showModal(): void {
  this.authService.changeForModal(true);
}
}
