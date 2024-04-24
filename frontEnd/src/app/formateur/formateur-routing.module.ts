import { ShowProfilComponent } from './components/show-profil/show-profil.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { CvComponent } from './components/cv/cv.component';

const routes: Routes = [
  { path: '' , component: FormateurComponent,
   children: [
    {
      path: '',
      component: MainComponent,
    },
    {
      path: 'training',
      loadChildren: () => import('./training/training.module')
        .then(m => m.TrainingModule)
    },
    {path: 'profil',
    component: ProfilComponent,
    children: [
      {
        path: 'show-profil',
        component: ShowProfilComponent,
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
export class FormateurRoutingModule { }
