import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatGridComponent } from './mat-grid/mat-grid.component';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
  ],
  declarations: [MatGridComponent],
  exports:[
    MatTableModule,
    MatGridComponent
  ]

})
export class MaterialsModule { }