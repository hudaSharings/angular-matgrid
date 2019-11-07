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
import {MatDatepickerModule, MatFormFieldModule, MatInputModule,
 MatNativeDateModule, MatButtonModule} from "@angular/material";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule } from 'saturn-datepicker'
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter'
import {MatSelectModule} from '@angular/material/select'

import { MatGridComponent } from './mat-grid/mat-grid.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatDyformComponent } from './mat-dyform/mat-dyform.component';
import { MatDyfieldComponent } from './mat-dyform/mat-dyfield/mat-dyfield.component';
import { DyformService } from './services/dyform.service'

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
    MatSlideToggleModule,
    MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatButtonModule,
    SatDatepickerModule,
    MatSelectModule
]
const matComponents=[
MatGridComponent,
MatDyformComponent,
MatDyfieldComponent
]

@NgModule({
  imports: [
    CommonModule,
    matModules
  ],
  declarations: [matComponents,],
  exports:[
    matComponents,
    matModules  
  ],
  providers: [      
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS, providers: [DyformService]},
    ],

})
export class MaterialsModule { }