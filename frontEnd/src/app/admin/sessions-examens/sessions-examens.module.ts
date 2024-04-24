import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsExamensRoutingModule } from './sessions-examens-routing.module';
import { AddSessionExamenComponent } from './components/add-session-examen/add-session-examen.component';
import { EditSessionExamenComponent } from './components/edit-session-examen/edit-session-examen.component';
import { ListSessionExamenComponent } from './components/list-session-examen/list-session-examen.component';
import { ListSessionExamenInactiveComponent } from './components/list-session-examen-inactive/list-session-examen-inactive.component';
import { SessionExamenComponent } from './components/session-examen/session-examen.component';
import { ShowSessionExamenComponent } from './components/show-session-examen/show-session-examen.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [AddSessionExamenComponent, EditSessionExamenComponent,
     ListSessionExamenComponent, ListSessionExamenInactiveComponent,
      SessionExamenComponent, ShowSessionExamenComponent],
  imports: [
    CommonModule,
    SessionsExamensRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NzSelectModule,
    NzTableModule,
    NzInputModule,
    NzSkeletonModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzButtonModule
  ],
})
export class SessionsExamensModule { }
