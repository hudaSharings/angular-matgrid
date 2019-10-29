export interface IColumn{
  name:string;
  field:string; 
}

export abstract class MatGrid{
  Columns: IColumn[];
  rowData:[];
  onDetail(item:any);
  OnEdit(item:any);
  onDelete(item:any);
}
