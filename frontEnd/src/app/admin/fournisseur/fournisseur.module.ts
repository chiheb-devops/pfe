import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './components/list-fournisseur/list-fournisseur.component';
import { ListFournisseurInactiveComponent } from './components/list-fournisseur-inactive/list-fournisseur-inactive.component';
import { AddFournisseurComponent } from './components/add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './components/edit-fournisseur/edit-fournisseur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ShowFournisseurComponent } from './components/components/show-fournisseur/show-fournisseur.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [FournisseurComponent, ListFournisseurComponent,
    ListFournisseurInactiveComponent, AddFournisseurComponent,
     EditFournisseurComponent, ShowFournisseurComponent ],
  imports: [
    CommonModule,
    FournisseurRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    NzTableModule,
    NzInputModule,
    NzSkeletonModule,
    NzButtonModule
  ]
})
export class FournisseurModule { }
