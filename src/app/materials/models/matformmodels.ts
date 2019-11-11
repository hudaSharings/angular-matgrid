
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
export class InputField extends FormFieldBase<string> {
  controlType = 'input';
  type: string;
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
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
export class ChecktboxListField extends FormFieldBase<string> {
  controlType = 'checkboxlist';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'checkbox';
  }
}
export class RadiobuttonListField extends FormFieldBase<string> {
  controlType = 'Radiobuttonlist';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'Radiobutton';
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
