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
  isApi:boolean;
  url:string;
  constructor(options: {} = {}) {
    super(options);
    this.isApi=options['isApi']||false;
    if(!this.isApi)
    this.options = options['options'] || [];
    else
    {
      this.url=options['url']
      this.options = this.getOptionsFromApiURL();
    }
    
  }

   getOptionsFromApiURL(){
     //this.url
    return [{key: 'option', value: 'option'},
    {key: 'option1', value: 'option2'},
    {key: 'option2', value: 'option3'},
    {key: 'option3', value: 'option4'},
    {key: 'option4', value: 'option5'}]
  }
}
