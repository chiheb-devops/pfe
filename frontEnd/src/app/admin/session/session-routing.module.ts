import { NotAdminGuardAllocation } from './../../guards/not-admin-guard.guard';
import { ShowSessionComponent } from './components/show-session/show-session.component';
import { ListSessionInactiveComponent } from './components/list-session-inactive/list-session-inactive.component';
import { ListSessionComponent } from './components/list-session/list-session.component';
import { SessionComponent } from './components/session/session.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSessionComponent } from './components/add-session/add-session.component';
import { EditSessionComponent } from './components/edit-session/edit-session.component';

const routes: Routes = [
  {path: '',
  component: SessionComponent,
  children: [
   {
      path: 'list-session',
      component: ListSessionComponent,
    },
    {
      path: 'list-session-inactive',
      component: ListSessionInactiveComponent,
    }
    , {
      path: 'add-session',
      component: AddSessionComponent,
      canActivate: [NotAdminGuardAllocation]
    },
     {
      path: 'edit-session/:id',
      component: EditSessionComponent,
      canActivate: [NotAdminGuardAllocation]
    },
    {
     path: 'show-session/:id',
     component: ShowSessionComponent,
   }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
