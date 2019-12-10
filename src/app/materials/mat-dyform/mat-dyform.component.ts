import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{IField,ControlTypes,FormFieldBase} from '../models'
@Component({
  selector: 'app-mat-dyform',
  templateUrl: './mat-dyform.component.html',
  styleUrls: ['./mat-dyform.component.css']
})
export class MatDyformComponent implements OnInit {
 @Input() formFields: FormFieldBase<any>[] = [];
  form: FormGroup;
 @Output()
  payLoad=new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.form= this.toFormGroup(this.formFields)
  }
   isValid(key:string) {
      return this.form.controls[key].valid;
       }
  toFormGroup(fields: FormFieldBase<any>[] ) {
    debugger;
    let group: any = {}; 
    fields.forEach(field => {
      if(field)
      group[field.key] =field.required ? new FormControl(field.value || '', Validators.required)
                                       : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }

  onSubmit() {
    debugger;
    let values=this.form.value;
    this.payLoad.emit(values);
  }
}