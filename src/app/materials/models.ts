export interface IColumn{
  name:string;
  field:string; 
  searchFieldType:string;
 
}

export abstract class MatGrid{
 abstract Columns: IColumn[];
 abstract rowData:any[];
 abstract onDetail(item:any);
 abstract onEdit(item:any);
 abstract onDelete(item:any);
}
