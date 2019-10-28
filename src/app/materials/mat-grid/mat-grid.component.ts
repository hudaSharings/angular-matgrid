import { Component, OnInit } from '@angular/core';
import {IColumn} from '../models'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-mat-grid',
  templateUrl: './mat-grid.component.html',
  styleUrls: ['./mat-grid.component.css']
})
export class MatGridComponent implements OnInit {
  Columns: IColumn[] = [
    {name:'position', field:'position'},
    {name:'name', field:'name'},
    {name:'weight', field:'weight'},
    {name:'symbol', field:'symbol'} ,            
    ]
  displayedColumns: string[] =this.Columns.map(x=>{return x.name;})   
  dataSource = ELEMENT_DATA;
  constructor() {
    this.displayedColumns.push('Action')
   }

  ngOnInit() {
  }

  OnDetail(){

  }
  OnEdit(){

  }
  OnDelete(){

  }

}