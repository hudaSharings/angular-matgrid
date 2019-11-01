import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

import { MatGridComponent } from './mat-grid/mat-grid.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatDyformComponent } from './mat-dyform/mat-dyform.component'
const matModules =[
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSlideToggleModule
]
const matComponents=[
MatGridComponent
]

@NgModule({
  imports: [
    CommonModule,
    matModules
  ],
  declarations: [matComponents, MatDyformComponent],
  exports:[
    matComponents,
    matModules  
  ]

})
export class MaterialsModule { }