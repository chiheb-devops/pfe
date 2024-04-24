import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningFormateurRoutingModule } from './planning-formateur-routing.module';
import { ListPlanningComponent } from './components/list-planning/list-planning.component';
import { AddPlanningComponent } from './components/add-planning/add-planning.component';
import { EditPlanningComponent } from './components/edit-planning/edit-planning.component';
import { ListPlanningInactiveComponent } from './components/list-planning-inactive/list-planning-inactive.component';
import { PlanningComponent } from './components/planning/planning.component';
import { ShowPlanningComponent } from './components/show-planning/show-planning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdatePlannigComponent } from './components/update-plannig/update-plannig.component';
import { PlanningCalendarComponent } from './components/planning-calendar/planning-calendar.component';
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
  declarations: [ListPlanningComponent, AddPlanningComponent, EditPlanningComponent, ListPlanningInactiveComponent, PlanningComponent, ShowPlanningComponent, UpdatePlannigComponent, PlanningCalendarComponent],
  imports: [
    CommonModule,
    PlanningFormateurRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
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
export class PlanningFormateurModule { }
