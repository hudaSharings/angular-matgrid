import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SelectionModel} from '@angular/cdk/collections';

import { MatGridComponent } from './mat-grid/mat-grid.component';

const matModules =[
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatCheckboxModule
]
const matComponents=[
MatGridComponent
]

@NgModule({
  imports: [
    CommonModule,
    matModules
  ],
  declarations: [matComponents],
  exports:[
    matComponents,
    matModules  
  ]

})
export class MaterialsModule { }