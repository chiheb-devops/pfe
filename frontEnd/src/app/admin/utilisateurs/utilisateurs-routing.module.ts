import { ShowUtilisateurExterneComponent } from './components/show-utilisateur-externe/show-utilisateur-externe.component';
import { EditUtilisateurExterneComponent } from './components/edit-utilisateur-externe/edit-utilisateur-externe.component';
import { AddUtilisateurExterneComponent } from './components/add-utilisateur-externe/add-utilisateur-externe.component';
import { UtilisateurExterneComponent } from './components/utilisateur-externe/utilisateur-externe.component';
import { ShowUtilisateurActifComponent } from './components/show-utilisateur-actif/show-utilisateur-actif.component';
import { EditUtilisateurActifComponent } from './components/edit-utilisateur-actif/edit-utilisateur-actif.component';
import { AddUtilisateurActifComponent } from './components/add-utilisateur-actif/add-utilisateur-actif.component';
import { UtilisateurActifComponent } from './components/utilisateur-actif/utilisateur-actif.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',
  component: UtilisateursComponent,
  children: [
    {
      path: 'list-utilisateurs-actif',
      component: UtilisateurActifComponent,
    },
    {
      path: 'add-utilisateurs-actif',
      component: AddUtilisateurActifComponent,
    },
    {
      path: 'edit-utilisateurs-actif/:id',
      component: EditUtilisateurActifComponent,
    },
    {
      path: 'show-utilisateurs-actif/:id',
      component: ShowUtilisateurActifComponent,
    },
    {
      path: 'list-utilisateurs-externe',
      component: UtilisateurExterneComponent,
    },
    {
      path: 'add-utilisateurs-externe',
      component: AddUtilisateurExterneComponent,
    },
    {
      path: 'edit-utilisateurs-externe/:id',
      component: EditUtilisateurExterneComponent,
    },
    {
      path: 'show-utilisateurs-externe/:id',
      component: ShowUtilisateurExterneComponent,
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateursRoutingModule { }
