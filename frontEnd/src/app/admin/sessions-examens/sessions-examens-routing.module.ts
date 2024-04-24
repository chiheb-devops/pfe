import { NotAdminGuardAllocation } from './../../guards/not-admin-guard.guard';
import { ShowSessionExamenComponent } from './components/show-session-examen/show-session-examen.component';
import { EditSessionExamenComponent } from './components/edit-session-examen/edit-session-examen.component';
import { AddSessionExamenComponent } from './components/add-session-examen/add-session-examen.component';
import { ListSessionExamenInactiveComponent } from './components/list-session-examen-inactive/list-session-examen-inactive.component';
import { ListSessionExamenComponent } from './components/list-session-examen/list-session-examen.component';
import { SessionExamenComponent } from './components/session-examen/session-examen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',
  component: SessionExamenComponent,
  children: [
   {
      path: 'list-session-examan',
      component: ListSessionExamenComponent,
    },
    {
      path: 'list-session-examan-inactive',
      component: ListSessionExamenInactiveComponent,
    }
    , {
      path: 'add-session-examan',
      component: AddSessionExamenComponent,
      canActivate: [NotAdminGuardAllocation]
    },
     {
      path: 'edit-session-examan/:id',
      component: EditSessionExamenComponent,
      canActivate: [NotAdminGuardAllocation]
    },
    {
     path: 'show-session-examan/:id',
     component: ShowSessionExamenComponent,
   }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsExamensRoutingModule { }
