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
  @Output()
  getSelectedRows=new EventEmitter()
  

  searchForm:FormGroup;
  Columns: IColumn[] =[]
  searchColumns: ISearchColumn[] =[]
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
    this.columnDef.map(x=>{x.display=true;this.displayedColumns.push(x.name);}) 
    this.displayedColumns.push('Action')
    this.dataSource=  new MatTableDataSource(this.data);    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;   
    this.searchColumns=this.loadSerchColumns();
    this.searchForm=this.toFormGroup(this.searchColumns);
  }
  loadDisplayColumns(loadAll:boolean){
    debugger;
      this.displayedColumns=[];
      this.displayedColumns.push('Select')
    if(loadAll){          
      this.columnDef.map(x=>{x.display=true;this.displayedColumns.push(x.name);})      
    }
    else{
    this.columnDef.map(x=>{
          if(x.display)
          this.displayedColumns.push(x.name);
        }
      ) 
    }
     this.displayedColumns.push('Action')
    //  this.resetDataSource()
  }
  loadSerchColumns(){
    let srchColumns:ISearchColumn[]=[]
    this.columnDef.forEach(x=>{
      var srColmn: ISearchColumn={
        field:x.field,
        name:x.name,
        searchFieldType:x.searchFieldType,
        condition:x.name+'Condition'
      }
      srchColumns.push(srColmn)
    })
    return srchColumns
  }
  loadAfterFilteredDataource(data:any[]){
    this.dataSource=  new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }
  resetDataSource(){
    this.dataSource=  new MatTableDataSource([]);
    this.dataSource=  new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; 
  }
  payLoad:any;
onSearchSubmitt(){
  let searchvalue =this.searchForm.value
  let fiteredList=[];  
 // alert(JSON.stringify(searchvalue));
  this.searchColumns.forEach(x=>{
    let fiteredData=[];
    debugger;
    if(searchvalue[x.name] && searchvalue[x.name]!=""){
      var condition=searchvalue[x.condition]
      switch(x.searchFieldType){
        case 'number':
          switch(condition){
               case'eq' :fiteredData= this.data.filter(y=>{return y[x.name]==searchvalue[x.name]});break
               case'gt' :fiteredData= this.data.filter(y=>{return (y[x.name])>(searchvalue[x.name])});break
               case'lt' :fiteredData= this.data.filter(y=>{return (y[x.name])< (searchvalue[x.name])});break
              default:fiteredData= this.data.filter(y=>{return y[x.name]==searchvalue[x.name]});break
            };
           break; 
        case 'string':
          switch(condition){
              case'C' :fiteredData= this.data.filter(y=>{return y[x.name].includes(searchvalue[x.name])});break
              case'S' :fiteredData= this.data.filter(y=>{return y[x.name].startsWith(searchvalue[x.name])}) ;break
              case'E' :fiteredData= this.data.filter(y=>{return y[x.name].endsWith(searchvalue[x.name])});break
              default:fiteredData= this.data.filter(y=>{return y[x.name].includes(searchvalue[x.name])});break
          }
          break;

        default:
          fiteredData= this.data.filter(y=>{return y[x.name]==searchvalue[x.name]});break
      }
      fiteredData.map(x=>{fiteredList.push(x)})
        debugger;
        //if(fiteredList.length>0)
        this.loadAfterFilteredDataource(fiteredList)
    }
    
   }
  )
  
}
  getSelected(){
  this.getSelectedRows.emit(this.selection.selected)
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

  toFormGroup(columns: ISearchColumn[] ) {
    let group: any = {}; 
    

    columns.forEach(column => {
      group[column.name] = new FormControl('');
      group[column.name+'Condition'] = new FormControl('');
                                              
    });
    return new FormGroup(group);
  }

}

export interface ISearchColumn{
  name:string;
  field:string; 
  searchFieldType:string;
  condition:string;
 
}