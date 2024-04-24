import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormateurRoutingModule } from './formateur-routing.module';
import { FormateurComponent } from './components/formateur/formateur.component';
import { ListFormateurComponent } from './components/list-formateur/list-formateur.component';
import { AddFormateurComponent } from './components/add-formateur/add-formateur.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EditFormateurComponent } from './components/edit-formateur/edit-formateur.component';
import { ShowFormateurComponent } from './components/show-formateur/show-formateur.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ListFormateurInactiveComponent } from './components/list-formateur-inactive/list-formateur-inactive.component';
import { ListExaminateurComponent } from './components/list-examinateur/list-examinateur.component';
import { ListExaminateurInactiveComponent } from './components/list-examinateur-inactive/list-examinateur-inactive.component';
import { ShowExaminateurComponent } from './components/show-examinateur/show-examinateur.component';
import { FormateurInactiveComponent } from './components/formateur-inactive/formateur-inactive.component';
@NgModule({
  declarations: [FormateurComponent, ListFormateurComponent, AddFormateurComponent, EditFormateurComponent, ShowFormateurComponent, ListFormateurInactiveComponent, ListExaminateurComponent, ListExaminateurInactiveComponent, ShowExaminateurComponent, FormateurInactiveComponent],
  imports: [
    CommonModule,
    FormateurRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NzButtonModule,
    NzTableModule,
    NzDropDownModule,
    NzIconModule,
    NzSkeletonModule,
    NzTabsModule
  ]
})
export class FormateurModule { }
