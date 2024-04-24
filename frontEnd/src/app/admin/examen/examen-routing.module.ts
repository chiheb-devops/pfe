import { NotAdminSessionGuard } from './../../guards/not-admin-session.guard';
import { ListExamenInactiveComponent } from './components/list-examen-inactive/list-examen-inactive.component';
import { ViewExamenComponent } from './components/view-examen/view-examen.component';
import { EditExamenComponent } from './components/edit-examen/edit-examen.component';
import { AddExamenComponent } from './components/add-examen/add-examen.component';
import { ListExamenComponent } from './components/list-examen/list-examen.component';
import { ExamensComponent } from './components/examens/examens.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',
  component: ExamensComponent,
  children: [
    {
      path: 'list-examen',
      component: ListExamenComponent,
    },
    {
      path: 'add-examen',
      component: AddExamenComponent,
      canActivate: [NotAdminSessionGuard]
    },
    {
      path: 'edit-examen/:id',
      component: EditExamenComponent,
      canActivate: [NotAdminSessionGuard]
    },
    {
      path: 'show-examen/:id',
      component: ViewExamenComponent,
    },
    {
      path: 'list-examen-inactive',
      component: ListExamenInactiveComponent,
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamenRoutingModule { }
