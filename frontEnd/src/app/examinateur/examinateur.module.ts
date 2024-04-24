import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminateurRoutingModule } from './examinateur-routing.module';
import { ExChangePasswordComponent } from './components/ex-change-password/ex-change-password.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExaminateurComponent } from './components/examinateur/examinateur.component';
import { ExMainComponent } from './components/ex-main/ex-main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExProfilComponent } from './components/ex-profil/ex-profil.component';
import { ExShowProfilComponent } from './components/ex-show-profil/ex-show-profil.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzIconModule } from 'ng-zorro-antd/icon';
import dayGridPlugin from '@fullcalendar/daygrid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardExamenComponent } from './components/dashboard-examen/dashboard-examen.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { CvComponent } from './components/cv/cv.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);
@NgModule({
  declarations: [ExChangePasswordComponent, FooterComponent, ExaminateurComponent,
     ExMainComponent, NavbarComponent, ExProfilComponent, ExShowProfilComponent,
      SidebarComponent, DashboardComponent, DashboardExamenComponent, CertificationsComponent, CvComponent],
  imports: [
    CommonModule,
    ExaminateurRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FullCalendarModule,
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
export class ExaminateurModule { }
