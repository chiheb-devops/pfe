import { PlanningExamensCalendarComponent } from './components/planning-examens-calendar/planning-examens-calendar.component';
import { ShowPlanningExamensComponent } from './components/show-planning-examens/show-planning-examens.component';
import { EditPlanningExamensComponent } from './components/edit-planning-examens/edit-planning-examens.component';
import { AddPlanningExamensComponent } from './components/add-planning-examens/add-planning-examens.component';
import { ListPlanningExamensInactiveComponent } from './components/list-planning-examens-inactive/list-planning-examens-inactive.component';
import { ListPlanningExamensComponent } from './components/list-planning-examens/list-planning-examens.component';
import { PlanningExamensComponent } from './components/planning-examens/planning-examens.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
  component: PlanningExamensComponent,
  children: [
   {
      path: 'list-planning-examens',
      component: ListPlanningExamensComponent,
    },
    {
      path: 'list-planning-examens-inactive',
      component: ListPlanningExamensInactiveComponent,
    }
    , {
      path: 'add-planning-examens',
      component: AddPlanningExamensComponent,
    },
     {
      path: 'edit-planning-examens/:id',
      component: EditPlanningExamensComponent,
    },
    {
     path: 'show-planning-examens/:id',
     component: ShowPlanningExamensComponent,
   },
  {
   path: 'planning-examens-calendar',
   component: PlanningExamensCalendarComponent,
 }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningExamensRoutingModule { }
