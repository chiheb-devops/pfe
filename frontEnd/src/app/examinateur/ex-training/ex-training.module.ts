import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExTrainingRoutingModule } from './ex-training-routing.module';
import { ExFormationRealiserComponent } from './components/ex-formation-realiser/ex-formation-realiser.component';
import { ExFormationProchaineComponent } from './components/ex-formation-prochaine/ex-formation-prochaine.component';
import { ExExamenProchaineComponent } from './components/ex-examen-prochaine/ex-examen-prochaine.component';
import { ExExamenRealiserComponent } from './components/ex-examen-realiser/ex-examen-realiser.component';
import { ExTrainingComponent } from './components/ex-training/ex-training.component';
import { ExCalenderExamenComponent } from './components/ex-calender-examen/ex-calender-examen.component';
import { ExCalenderFormaionComponent } from './components/ex-calender-formaion/ex-calender-formaion.component';
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
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ExCalenderComponent } from './components/ex-calender/ex-calender.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);

@NgModule({
  declarations: [ExFormationRealiserComponent, ExFormationProchaineComponent, ExExamenProchaineComponent, ExExamenRealiserComponent, ExTrainingComponent, ExCalenderExamenComponent, ExCalenderFormaionComponent, ExCalenderComponent],
  imports: [
    CommonModule,
    ExTrainingRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FullCalendarModule,
    NgbModule,
    NzTableModule,
    NzIconModule,
    NzSkeletonModule,
    NzTabsModule
  ]
})
export class ExTrainingModule { }
