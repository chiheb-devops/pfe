import { DashboardUtilisateurComponent } from './components/dashboard-utilisateur/dashboard-utilisateur.component';
import { RoleAdminAllocationsGuard } from './../guards/role-admin-allocations.guard';
import { RoleAdminSessionsGuard } from './../guards/role-admin-sessions.guard';
import { RoleAdminDonneesGuard } from './../guards/role-admin-donnees.guard';
import { RoleAdminUtilisateurGuard } from './../guards/role-admin-utilisateur.guard';
import { RoleAdminGlobalGuard } from './../guards/role-admin-global.guard';
import { DashboardExamenComponent } from './components/dashboard-examen/dashboard-examen.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlanningExamensCalendarComponent } from './planning-examens/components/planning-examens-calendar/planning-examens-calendar.component';
import { ListPlanningExamensInactiveComponent } from './planning-examens/components/list-planning-examens-inactive/list-planning-examens-inactive.component';
import { ListPlanningInactiveComponent } from './planning-formateur/components/list-planning-inactive/list-planning-inactive.component';
import { ListPlanningCoursExamensInactiveComponent } from './components/list-planning-cours-examens-inactive/list-planning-cours-examens-inactive.component';
import { ListPlanningExamensComponent } from './planning-examens/components/list-planning-examens/list-planning-examens.component';
import { ListPlanningComponent } from './planning-formateur/components/list-planning/list-planning.component';
import { ListPlanningCoursExamensComponent } from './components/list-planning-cours-examens/list-planning-cours-examens.component';
import { ListSessionExamenInactiveComponent } from './sessions-examens/components/list-session-examen-inactive/list-session-examen-inactive.component';
import { ListSessionInactiveComponent } from './session/components/list-session-inactive/list-session-inactive.component';
import { ListSessionExamenComponent } from './sessions-examens/components/list-session-examen/list-session-examen.component';
import { ListExamenInactiveComponent } from './examen/components/list-examen-inactive/list-examen-inactive.component';
import { ListCoursInactiveComponent } from './gestion-cours/components/list-cours-inactive/list-cours-inactive.component';
import { ListCoursExamenInactiveComponent } from './components/list-cours-examen-inactive/list-cours-examen-inactive.component';

import { ListCoursExamenComponent } from './components/list-cours-examen/list-cours-examen.component';
import { SelfadminGuard } from './../guards/selfadmin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

import { ContentComponent } from './components/content/content.component';
import { ListCoursComponent } from './gestion-cours/components/list-cours/list-cours.component';
import { ListExamenComponent } from './examen/components/list-examen/list-examen.component';
import { ListSessionCoursExamensComponent } from './components/list-session-cours-examens/list-session-cours-examens.component';
import { ListSessionComponent } from './session/components/list-session/list-session.component';
import { ListSessionCoursExamensInactiveComponent } from './components/list-session-cours-examens-inactive/list-session-cours-examens-inactive.component';
import { PlanningCoursExamensCalendarComponent } from './components/planning-cours-examens-calendar/planning-cours-examens-calendar.component';
import { PlanningCalendarComponent } from './planning-formateur/components/planning-calendar/planning-calendar.component';
import { ChangerPasswordComponent } from './components/changer-password/changer-password.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path: '',
  component: AdminComponent,
  children: [
    {path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ContentComponent,
      },
     {
        path: 'dashboard-cours',
        component: ContentComponent,
      },
      {
        path: 'dashboard-examens',
        component: DashboardExamenComponent,
      },
      {
        path: 'dashboard-utilisateurs',
        component: DashboardUtilisateurComponent,
      }
    ]
  },
  {
    path: 'changer-password',
    canActivate: [RoleAdminGlobalGuard],
    component: ChangerPasswordComponent,
  },
  {
      path: 'formateur',
      loadChildren: () => import('./formateur/formateur.module')
        .then(m => m.FormateurModule),
        canActivate: [RoleAdminUtilisateurGuard]
    },
    {
      path: 'utilisateurs',
      loadChildren: () => import('./utilisateurs/utilisateurs.module')
        .then(m => m.UtilisateursModule),
        canActivate: [RoleAdminUtilisateurGuard]
    },
    {path: 'list-cours-examen',
    component: ListCoursExamenComponent,
    canActivate: [RoleAdminDonneesGuard]
    ,
    children: [
      {
        path: '',
        component: ListCoursComponent,
      },
     {
        path: 'cours/list-cours',
        component: ListCoursComponent,
      },
      {
        path: 'examen/list-examen',
        component: ListExamenComponent,
      }
    ]
  },
    {path: 'list-cours-examen-inactive',
    component: ListCoursExamenInactiveComponent,
    canActivate: [RoleAdminDonneesGuard]
    ,
    children: [
      {
        path: '',
        component: ListCoursInactiveComponent,
      },
     {
        path: 'cours/list-cours-inactive',
        component: ListCoursInactiveComponent,
      },
      {
        path: 'examen/list-examen-inactive',
        component: ListExamenInactiveComponent,
      }
    ]
  },
    {
      path: 'cours',
      loadChildren: () => import('./gestion-cours/gestion-cours.module')
        .then(m => m.GestionCoursModule),
    canActivate: [RoleAdminDonneesGuard]
    },
    {
      path: 'examen',
      loadChildren: () => import('./examen/examen.module')
        .then(m => m.ExamenModule),
        canActivate: [RoleAdminDonneesGuard]
    },
    {
      path: 'session',
      loadChildren: () => import('./session/session.module')
        .then(m => m.SessionModule),
        canActivate: [RoleAdminSessionsGuard]
    },
    {
      path: 'session-examen',
      loadChildren: () => import('./sessions-examens/sessions-examens.module')
        .then(m => m.SessionsExamensModule),
        canActivate: [RoleAdminSessionsGuard]
    },
    {path: 'list-session-cours-examen',
    component: ListSessionCoursExamensComponent,
    canActivate: [RoleAdminSessionsGuard],
    children: [
      {
        path: '',
        component: ListSessionComponent,
      },
     {
        path: 'session-cours/list-cours',
        component: ListSessionComponent,
      },
      {
        path: 'session-examen/list-examen',
        component: ListSessionExamenComponent,
      }
    ]
  },
    {path: 'list-session-cours-examen-inactive',
    component: ListSessionCoursExamensInactiveComponent,
    canActivate: [RoleAdminSessionsGuard],
    children: [
      {
        path: '',
        component: ListSessionInactiveComponent,
      },
     {
        path: 'session-cours/list-cours-inactive',
        component: ListSessionInactiveComponent,
      },
      {
        path: 'session-examen/list-examen-inactive',
        component: ListSessionExamenInactiveComponent,
      }
    ]
  },
    {
      path: 'fournisseur',
      loadChildren: () => import('./fournisseur/fournisseur.module')
        .then(m => m.FournisseurModule),
        canActivate: [RoleAdminDonneesGuard]
    },
    {
      path: 'planning',
      loadChildren: () => import('./planning-formateur/planning-formateur.module')
        .then(m => m.PlanningFormateurModule),
        canActivate: [RoleAdminAllocationsGuard]
    },
    {
      path: 'planning-examen',
      loadChildren: () => import('./planning-examens/planning-examens.module')
        .then(m => m.PlanningExamensModule),
        canActivate: [RoleAdminAllocationsGuard]
    },
    {path: 'list-planning-cours-examen',
    component: ListPlanningCoursExamensComponent,
    canActivate: [RoleAdminAllocationsGuard],
    children: [
      {
        path: '',
        component: ListPlanningComponent,
      },
     {
        path: 'planning-cours/list-planning-cours',
        component: ListPlanningComponent,
      },
      {
        path: 'planning-examen/list-planning-examen',
        component: ListPlanningExamensComponent,
      }
    ]
  },
    {path: 'list-planning-cours-examen-inactive',
    component: ListPlanningCoursExamensInactiveComponent,
    canActivate: [RoleAdminAllocationsGuard],
    children: [
      {
        path: '',
        component: ListPlanningInactiveComponent,
      },
     {
        path: 'planning-cours/list-planning-cours-inactive',
        component: ListPlanningInactiveComponent,
      },
      {
        path: 'planning-examen/list-planning-examen-inactive',
        component: ListPlanningExamensInactiveComponent,
      }
    ]
  },
  {path: 'planning-cours-examen-calendar',
  component: PlanningCoursExamensCalendarComponent,
  canActivate: [RoleAdminAllocationsGuard],
  children: [
    {
      path: '',
      component: PlanningCalendarComponent,
    },
   {
      path: 'planning-cours-calendar',
      component: PlanningCalendarComponent,
    },
    {
      path: 'planning-examens-calendar',
      component: PlanningExamensCalendarComponent,
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
export class AdminRoutingModule { }
