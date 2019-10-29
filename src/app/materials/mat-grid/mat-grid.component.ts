import { Component, OnInit,Input,Output,EventEmitter,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {IColumn} from '../models'


@Component({
  selector: 'app-mat-grid',
  templateUrl: './mat-grid.component.html',
  styleUrls: ['./mat-grid.component.css']
})
export class MatGridComponent implements OnInit {

  Columns: IColumn[] =[]
  displayedColumns: string[]=[];
  dataSource:any
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


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

  constructor() {
   
   }

  ngOnInit() {
    this.Columns=this.columnDef
    this.displayedColumns =this.columnDef.map(x=>{return x.name;}) 
    this.displayedColumns.push('Action')
    this.dataSource= new MatTableDataSource(this.data);      
    this.dataSource.paginator = this.paginator;
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

}