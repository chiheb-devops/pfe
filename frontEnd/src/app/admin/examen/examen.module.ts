import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamenRoutingModule } from './examen-routing.module';
import { ExamensComponent } from './components/examens/examens.component';
import { AddExamenComponent } from './components/add-examen/add-examen.component';
import { ListExamenComponent } from './components/list-examen/list-examen.component';
import { ListExamenInactiveComponent } from './components/list-examen-inactive/list-examen-inactive.component';
import { EditExamenComponent } from './components/edit-examen/edit-examen.component';
import { ViewExamenComponent } from './components/view-examen/view-examen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [ExamensComponent, AddExamenComponent,
     ListExamenComponent, ListExamenInactiveComponent,
     EditExamenComponent, ViewExamenComponent],
  imports: [
    CommonModule,
    ExamenRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzTableModule,
    NzInputModule,
    NzSkeletonModule,
    Ng2SearchPipeModule,
    NzTimePickerModule,
    NzButtonModule
  ]
})
export class ExamenModule { }
