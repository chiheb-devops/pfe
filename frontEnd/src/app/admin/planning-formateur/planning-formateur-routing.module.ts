import { PlanningCalendarComponent } from './components/planning-calendar/planning-calendar.component';
import { ShowPlanningComponent } from './components/show-planning/show-planning.component';
import { EditPlanningComponent } from './components/edit-planning/edit-planning.component';
import { AddPlanningComponent } from './components/add-planning/add-planning.component';
import { ListPlanningInactiveComponent } from './components/list-planning-inactive/list-planning-inactive.component';
import { ListPlanningComponent } from './components/list-planning/list-planning.component';
import { PlanningComponent } from './components/planning/planning.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatePlannigComponent } from './components/update-plannig/update-plannig.component';

const routes: Routes = [
  { path: '',
  component: PlanningComponent,
  children: [
   {
      path: 'list-planning',
      component: ListPlanningComponent,
    },
    {
      path: 'list-planning-inactive',
      component: ListPlanningInactiveComponent,
    }
    , {
      path: 'add-planning',
      component: AddPlanningComponent,
    },
     {
      path: 'edit-planning/:id',
      component: EditPlanningComponent,
    },
    {
      path: 'update-planning/:id',
      component: UpdatePlannigComponent,
    },
    {
     path: 'show-planning/:id',
     component: ShowPlanningComponent,
   },
  {
   path: 'planning-calendar',
   component: PlanningCalendarComponent,
 }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningFormateurRoutingModule { }
