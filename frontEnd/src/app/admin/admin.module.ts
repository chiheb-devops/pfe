import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ChartsModule } from 'ng2-charts';
import { ChangerPasswordComponent } from './components/changer-password/changer-password.component';
import { MainComponent } from './components/main/main.component'; // a plugin
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TooltipModule } from 'ng2-tooltip-directive';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { ListCoursExamenComponent } from './components/list-cours-examen/list-cours-examen.component';
import { ListCoursExamenInactiveComponent } from './components/list-cours-examen-inactive/list-cours-examen-inactive.component';
import { ListSessionCoursExamensComponent } from './components/list-session-cours-examens/list-session-cours-examens.component';
import { ListSessionCoursExamensInactiveComponent } from './components/list-session-cours-examens-inactive/list-session-cours-examens-inactive.component';
import { ListPlanningCoursExamensComponent } from './components/list-planning-cours-examens/list-planning-cours-examens.component';
import { ListPlanningCoursExamensInactiveComponent } from './components/list-planning-cours-examens-inactive/list-planning-cours-examens-inactive.component';
import { PlanningCoursExamensCalendarComponent } from './components/planning-cours-examens-calendar/planning-cours-examens-calendar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardExamenComponent } from './components/dashboard-examen/dashboard-examen.component';
import { DashboardUtilisateurComponent } from './components/dashboard-utilisateur/dashboard-utilisateur.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [NavbarComponent, AdminComponent, SidebarComponent, ContentComponent,
     FooterComponent, ChangerPasswordComponent, MainComponent, ListCoursExamenComponent,
      ListCoursExamenInactiveComponent, ListSessionCoursExamensComponent,
       ListSessionCoursExamensInactiveComponent, ListPlanningCoursExamensComponent,
        ListPlanningCoursExamensInactiveComponent, PlanningCoursExamensCalendarComponent,
         DashboardComponent, DashboardExamenComponent, DashboardUtilisateurComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    ReactiveFormsModule ,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FullCalendarModule,
    ChartsModule,
    NzButtonModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzSelectModule,
    NzToolTipModule,
    NzInputModule,
    NzFormModule,
    TooltipModule,
    NzSkeletonModule,
    NzTabsModule,
    NzDatePickerModule,
    NzTimePickerModule
  ]
})
export class AdminModule { }
