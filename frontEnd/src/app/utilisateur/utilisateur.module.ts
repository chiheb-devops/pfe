import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [ProfileComponent, SidebarComponent, NavbarComponent, FooterComponent, UtilisateurComponent, ChangePasswordComponent, MainComponent],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgbModule,
    NzInputModule,
    NzFormModule,
    NzTableModule,
    NzIconModule,
    NzSkeletonModule,
    NzTabsModule,
    NzModalModule,
    NzButtonModule
  ]
})
export class UtilisateurModule { }
