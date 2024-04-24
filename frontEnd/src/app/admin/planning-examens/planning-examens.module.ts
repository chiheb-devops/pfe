import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningExamensRoutingModule } from './planning-examens-routing.module';
import { AddPlanningExamensComponent } from './components/add-planning-examens/add-planning-examens.component';
import { EditPlanningExamensComponent } from './components/edit-planning-examens/edit-planning-examens.component';
import { ListPlanningExamensComponent } from './components/list-planning-examens/list-planning-examens.component';
import { ListPlanningExamensInactiveComponent } from './components/list-planning-examens-inactive/list-planning-examens-inactive.component';
import { PlanningExamensComponent } from './components/planning-examens/planning-examens.component';
import { PlanningExamensCalendarComponent } from './components/planning-examens-calendar/planning-examens-calendar.component';
import { ShowPlanningExamensComponent } from './components/show-planning-examens/show-planning-examens.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TooltipModule } from 'ng2-tooltip-directive';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [AddPlanningExamensComponent, EditPlanningExamensComponent, ListPlanningExamensComponent, ListPlanningExamensInactiveComponent, PlanningExamensComponent, PlanningExamensCalendarComponent, ShowPlanningExamensComponent],
  imports: [
    CommonModule,
    PlanningExamensRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    FullCalendarModule,
    NzToolTipModule,
    NzButtonModule,
    NzTableModule,
    NzInputModule,
    TooltipModule,
    NzSkeletonModule,
    NzSelectModule,
  ]
})
export class PlanningExamensModule { }
