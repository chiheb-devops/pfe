
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path : '', component: UtilisateurComponent ,
    children: [
    {
      path: '',
      component: MainComponent,
    },
      {
      path: 'profil',
      component: ProfileComponent,
    }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
