import { ExCalenderExamenComponent } from './components/ex-calender-examen/ex-calender-examen.component';
import { ExCalenderComponent } from './components/ex-calender/ex-calender.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExCalenderFormaionComponent } from './components/ex-calender-formaion/ex-calender-formaion.component';
import { ExExamenProchaineComponent } from './components/ex-examen-prochaine/ex-examen-prochaine.component';
import { ExExamenRealiserComponent } from './components/ex-examen-realiser/ex-examen-realiser.component';
import { ExFormationProchaineComponent } from './components/ex-formation-prochaine/ex-formation-prochaine.component';
import { ExFormationRealiserComponent } from './components/ex-formation-realiser/ex-formation-realiser.component';
import { ExTrainingComponent } from './components/ex-training/ex-training.component';

const routes: Routes = [
  { path: '',
  component: ExTrainingComponent,
  children: [
   {
      path: 'training-future',
      component: ExFormationProchaineComponent,
    },
    {
      path: 'training-past',
      component: ExFormationRealiserComponent,
    },
     {
      path: 'examen-future',
      component: ExExamenProchaineComponent,
    },
    {
      path: 'examen-past',
      component: ExExamenRealiserComponent,
    },
     {path: 'calendar',
    component: ExCalenderComponent,
    children: [
      {
        path: '',
        component: ExCalenderFormaionComponent,
      },
     {
        path: 'training',
        component: ExCalenderFormaionComponent,
      },
      {
        path: 'examen',
        component: ExCalenderExamenComponent,
      }
    ]
  }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExTrainingRoutingModule { }
