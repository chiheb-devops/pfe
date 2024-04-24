import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { PastTrainingComponent } from './components/past-training/past-training.component';
import { CalendarTrainingComponent } from './components/calendar-training/calendar-training.component';
import { TrainingComponent } from './components/training/training.component';
import { FeatureTrainingComponent } from './components/feature-training/feature-training.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import dayGridPlugin from '@fullcalendar/daygrid';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);

@NgModule({
  declarations: [ PastTrainingComponent, CalendarTrainingComponent, TrainingComponent, FeatureTrainingComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FullCalendarModule,
    NgbModule,
    NzTableModule,
    NzIconModule,
    NzSkeletonModule
  ]
})
export class TrainingModule { }
