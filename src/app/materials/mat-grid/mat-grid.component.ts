import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {IColumn} from '../models'


@Component({
  selector: 'app-mat-grid',
  templateUrl: './mat-grid.component.html',
  styleUrls: ['./mat-grid.component.css']
})
export class MatGridComponent implements OnInit {

  Columns: IColumn[] =[]
  displayedColumns: string[]=[];
  dataSource = []=[];

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
    this.dataSource= this.data; 
     this.displayedColumns.push('Action')
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