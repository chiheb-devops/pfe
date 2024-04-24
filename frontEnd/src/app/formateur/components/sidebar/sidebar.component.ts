import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
user;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    $('[data-widget="treeview"]').Treeview('init');
    this.authService.getcurrentuser().subscribe((data: any) => {
      this.user = data;
    });
  }
  toggleSidebar(): void {
    if (window.screen.width < 768) {
      $('[data-widget="pushmenu"]').PushMenu('toggle');
    }
  }
}
