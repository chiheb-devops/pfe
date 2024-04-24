import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UtilisateurService } from 'src/app/admin/services/utilisateur.service';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user;
  id;
  Result;
  constructor(private utilisateurService: UtilisateurService, private authService: AuthService) { }

  ngOnInit(): void {
    $('[data-widget="treeview"]').Treeview('init');
    this.authService.getcurrentuser().subscribe((data: any) => {
      this.user = data;
      this.id = data.id;
      this.fetchUtilisateur(this.id);
    });
  }
  fetchUtilisateur(id): void {
    this.utilisateurService.getUtilisateurById(id).subscribe((resp: any) => {
      this.Result = resp.result[0];
    });
   }
}
