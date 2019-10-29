export interface IColumn{
  name:string;
  field:string; 
}

export abstract class MatGrid{
 abstract Columns: IColumn[];
 abstract rowData:[];
 abstract onDetail(item:any);
 abstract OnEdit(item:any);
 abstract onDelete(item:any);
}
