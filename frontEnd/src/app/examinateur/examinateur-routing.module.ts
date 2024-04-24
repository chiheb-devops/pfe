import { CertificationsComponent } from './components/certifications/certifications.component';
import { DashboardExamenComponent } from './components/dashboard-examen/dashboard-examen.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExMainComponent } from './components/ex-main/ex-main.component';
import { ExProfilComponent } from './components/ex-profil/ex-profil.component';
import { ExShowProfilComponent } from './components/ex-show-profil/ex-show-profil.component';
import { ExaminateurComponent } from './components/examinateur/examinateur.component';
import { CvComponent } from './components/cv/cv.component';

const routes: Routes = [
  { path: '' , component: ExaminateurComponent,
   children: [
     {path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ExMainComponent,
      },
     {
        path: 'dashboard-cours',
        component: ExMainComponent,
      },
      {
        path: 'dashboard-examens',
        component: DashboardExamenComponent,
      }
    ]
  },
    {
      path: 'training',
      loadChildren: () => import('./ex-training/ex-training.module')
        .then(m => m.ExTrainingModule)
    },
    {path: 'profil',
    component: ExProfilComponent,
    children: [
      {
        path: 'show-profil',
        component: ExShowProfilComponent,
      },
      {
        path: 'certification',
        component: CertificationsComponent },
        {
          path: 'cv',
          component: CvComponent }
    ]
  }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminateurRoutingModule { }
