import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCoursRoutingModule } from './gestion-cours-routing.module';
import { CoursComponent } from './components/cours/cours.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { AddCategorieComponent } from './components/add-categorie/add-categorie.component';
import { EditCategorieComponent } from './components/edit-categorie/edit-categorie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListCategorieInactiveComponent } from './components/list-categorie-inactive/list-categorie-inactive.component';
import { ListCoursComponent } from './components/list-cours/list-cours.component';
import { AddCoursComponent } from './components/add-cours/add-cours.component';
import { EditCoursComponent } from './components/edit-cours/edit-cours.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ListCoursInactiveComponent } from './components/list-cours-inactive/list-cours-inactive.component';
import { ViewCoursComponent } from './components/view-cours/view-cours.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [CoursComponent, ListCategoriesComponent, AddCategorieComponent,
     EditCategorieComponent, ListCategorieInactiveComponent, ListCoursComponent,
      AddCoursComponent, EditCoursComponent, ListCoursInactiveComponent, ViewCoursComponent],
  imports: [
    CommonModule,
    GestionCoursRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NzTableModule,
    NzInputModule,
    NzSkeletonModule,
    NzButtonModule
  ]
})
export class GestionCoursModule { }
