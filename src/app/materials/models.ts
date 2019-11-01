export interface IColumn{
  name:string;
  field:string; 
  searchFieldType:string;
  display:boolean;
}
export interface IField{
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: ControlTypes;
  value:any;
}

export abstract class MatGrid{
 abstract Columns: IColumn[];
 abstract rowData:any[];
 abstract onDetail(item:any);
 abstract onEdit(item:any);
 abstract onDelete(item:any);
 abstract getSelectedRow(selectedRows:any)
}

export enum ControlTypes{
  text,
  number,
  date,  
  check,
  selectSingle,
  SelectMultiple,
}

export class FormFieldBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}
export class TextboxField extends FormFieldBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
export class Dropdownield extends FormFieldBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
