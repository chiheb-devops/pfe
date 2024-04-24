import { FeatureTrainingComponent } from './components/feature-training/feature-training.component';
import { CalendarTrainingComponent } from './components/calendar-training/calendar-training.component';
import { PastTrainingComponent } from './components/past-training/past-training.component';
import { TrainingComponent } from './components/training/training.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '',
  component: TrainingComponent,
  children: [
   {
      path: 'feature-training',
      component: FeatureTrainingComponent,
    },
    {
      path: 'past-training',
      component: PastTrainingComponent,
    }
    , {
      path: 'calendar-training',
      component: CalendarTrainingComponent,
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
