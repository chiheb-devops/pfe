import { FormateurInactiveComponent } from './components/formateur-inactive/formateur-inactive.component';
import { ShowExaminateurComponent } from './components/show-examinateur/show-examinateur.component';
import { ListExaminateurInactiveComponent } from './components/list-examinateur-inactive/list-examinateur-inactive.component';
import { ListExaminateurComponent } from './components/list-examinateur/list-examinateur.component';
import { ListFormateurInactiveComponent } from './components/list-formateur-inactive/list-formateur-inactive.component';
import { FormateurComponent } from './components/formateur/formateur.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFormateurComponent } from './components/list-formateur/list-formateur.component';
import { AddFormateurComponent } from './components/add-formateur/add-formateur.component';
import { EditFormateurComponent } from './components/edit-formateur/edit-formateur.component';
import { ShowFormateurComponent } from './components/show-formateur/show-formateur.component';

const routes: Routes = [
  {path: '',
  component: FormateurComponent,
  children: [
   {
      path: 'list-formateur',
      component: ListFormateurComponent,
    },
    {
      path: 'list-examinateur',
      component: ListExaminateurComponent,
    },
     {
      path: 'add-formateur',
      component: AddFormateurComponent,
    },
     {
      path: 'edit-formateur/:id',
      component: EditFormateurComponent,
    },
    {
      path: 'show-formateur/:id',
      component: ShowFormateurComponent,
    },
    {
      path: 'show-examinateur/:id',
      component: ShowExaminateurComponent,
    },
    {
      path: 'list-formateur-inactive',
      component: ListFormateurInactiveComponent,
    },
    {
      path: 'list-examinateur-inactive',
      component: ListExaminateurInactiveComponent,
    }
  ]
},
{path: 'inactive',
component: FormateurInactiveComponent,
children: [
  {
    path: 'show-formateur/:id',
    component: ShowFormateurComponent,
  },
  {
    path: 'show-examinateur/:id',
    component: ShowExaminateurComponent,
  },
  {
    path: 'list-formateur-inactive',
    component: ListFormateurInactiveComponent,
  },
  {
    path: 'list-examinateur-inactive',
    component: ListExaminateurInactiveComponent,
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateurRoutingModule { }
