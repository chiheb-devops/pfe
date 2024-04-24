import { UtilisateurGuard } from './guards/utilisateur.guard';
import { ExaminateurGuard } from './guards/examinateur.guard';
import { FormateurGuard } from './guards/formateur.guard';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RedirectionComponent } from './components/redirection/redirection.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'formateur',
    loadChildren: () => import('./formateur/formateur.module')
      .then(m => m.FormateurModule),
      canActivate: [FormateurGuard]
  },
  {
    path: 'examinateur',
    loadChildren: () => import('./examinateur/examinateur.module')
      .then(m => m.ExaminateurModule),
      canActivate: [ExaminateurGuard]
  },
  {
    path: 'utilisateur',
    loadChildren: () => import('./utilisateur/utilisateur.module')
      .then(m => m.UtilisateurModule),
      canActivate: [UtilisateurGuard]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
      },
      {
        path: 'recover-password/:token',
        component: RecoverPasswordComponent,
      }
    ],
  },
  {
    path: 'redirection',
    component: RedirectionComponent},
  { path: '', redirectTo: 'redirection', pathMatch: 'full' },
  { path: '**', redirectTo: 'redirection' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
