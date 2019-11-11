export interface IColumn{
  name:string;
  field:string; 
  searchFieldType:FieldTypes;
  display:boolean;
}
// export interface IField{
//   key: string;
//   label: string;
//   required: boolean;
//   order: number;
//   controlType: ControlTypes;
//   value:any;
// }

export abstract class MatGrid{
 abstract Columns: IColumn[];
 abstract rowData:any[];
 abstract onDetail(item:any);
 abstract onEdit(item:any);
 abstract onDelete(item:any);
 abstract getSelectedRow(selectedRows:any)
}

// export enum ControlTypes{
//   text,
//   number,
//   date,
//   email,
//   url,  
//   check,
//   selectSingle,
//   SelectMultiple,
// }
export enum FieldTypes{
  text,
  number,
  date,
  email,
  url,  
  check,
  radio,
  selectSingle,
  SelectMultiple,
}