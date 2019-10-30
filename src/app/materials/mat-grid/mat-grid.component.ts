import { Component, OnInit,Input,Output,EventEmitter,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {IColumn} from '../models'

import{FormBuilder,FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-mat-grid',
  templateUrl: './mat-grid.component.html',
  styleUrls: ['./mat-grid.component.css']
})
export class MatGridComponent implements OnInit {

  @Input()
  columnDef:IColumn[]
  @Input()
  data:any[]
  @Output()
  detail=new EventEmitter()
  @Output()
  edit=new EventEmitter()
  @Output()
  delete=new EventEmitter()

  searchForm:FormGroup;
  Columns: IColumn[] =[]
  searchColumns: IColumn[] =[]
  displayedColumns: string[]=[];
  dataSource:any
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  selection = new SelectionModel(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }




  constructor(private fb:FormBuilder) {
   
   }

  ngOnInit() {
    this.Columns=this.columnDef
    this.displayedColumns.push('Select')
    this.columnDef.map(x=>{this.displayedColumns.push(x.name);}) 
    this.displayedColumns.push('Action')
    this.dataSource=  new MatTableDataSource(this.data);    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;   
    this.searchColumns=this.columnDef
    this.searchForm=this.toFormGroup(this.columnDef);
  }

  loadAfterFilteredDataource(data:any[]){
    this.dataSource=  new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }
  resetDataSource(){
    this.dataSource=  new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }
  payLoad:any;
onSearchSubmitt(){
  let searchvalue =this.searchForm.value
  let fiteredList=[];
  alert(JSON.stringify(searchvalue['position']));
  this.searchColumns.forEach(x=>{
    let fiteredData=[];
    if(searchvalue[x.name]){
     fiteredData= this.data.filter(y=>{
        return y[x.name]==searchvalue[x.name]}
       );
    }
    fiteredData.map(x=>{fiteredList.push(x)})
   }
  )
  debugger;
  this.loadAfterFilteredDataource(fiteredList)
}

  OnDetail(item:any){
    this.detail.emit(item)
  }
  OnEdit(item:any){
this.edit.emit(item)
  }
  OnDelete(item:any){
this.delete.emit(item)
  }

  toFormGroup(columns: IColumn[] ) {
    let group: any = {};

    columns.forEach(column => {
      group[column.name] = new FormControl('');
                                              
    });
    return new FormGroup(group);
  }

}