import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { UtilisateurActifComponent } from './components/utilisateur-actif/utilisateur-actif.component';
import { AddUtilisateurActifComponent } from './components/add-utilisateur-actif/add-utilisateur-actif.component';
import { EditUtilisateurActifComponent } from './components/edit-utilisateur-actif/edit-utilisateur-actif.component';
import { ShowUtilisateurActifComponent } from './components/show-utilisateur-actif/show-utilisateur-actif.component';
import { ShowUtilisateurExterneComponent } from './components/show-utilisateur-externe/show-utilisateur-externe.component';
import { AddUtilisateurExterneComponent } from './components/add-utilisateur-externe/add-utilisateur-externe.component';
import { EditUtilisateurExterneComponent } from './components/edit-utilisateur-externe/edit-utilisateur-externe.component';
import { UtilisateurExterneComponent } from './components/utilisateur-externe/utilisateur-externe.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
@NgModule({
  declarations: [UtilisateurActifComponent, AddUtilisateurActifComponent,
     EditUtilisateurActifComponent, ShowUtilisateurActifComponent,
      ShowUtilisateurExterneComponent, AddUtilisateurExterneComponent, EditUtilisateurExterneComponent,
       UtilisateurExterneComponent, UtilisateursComponent],
  imports: [
    CommonModule,
    UtilisateursRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NzButtonModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzSkeletonModule,
    NzTabsModule,
    NzRadioModule
  ]
})
export class UtilisateursModule { }
