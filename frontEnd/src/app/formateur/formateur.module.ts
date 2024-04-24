import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormateurRoutingModule } from './formateur-routing.module';
import { MainComponent } from './components/main/main.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
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
import { ProfilComponent } from './components/profil/profil.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ShowProfilComponent } from './components/show-profil/show-profil.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { CvComponent } from './components/cv/cv.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);
@NgModule({
  declarations: [MainComponent, FormateurComponent, ContentComponent,
     FooterComponent, NavbarComponent, SidebarComponent, ChangePasswordComponent,
      ProfilComponent, ShowProfilComponent, CertificationsComponent, CvComponent],
  imports: [
    CommonModule,
    FormateurRoutingModule,
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
export class FormateurModule { }
