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
// Columns:IField[] = [
//     { key: "position", label: "position", controlType: ControlTypes.number, order:0, required:true ,value:null},
//     { key: "name", label: "name", controlType: ControlTypes.text, order:1, required:true ,value:null},
//     { key: "dob", label: "DateOfBirth", controlType: ControlTypes.date, order:2, required:true ,value:null},  
//     { key: "symbol", label: "Symbol", controlType: ControlTypes.selectSingle, order:3, required:true ,value:null},
//     { key: "active", label: "status", controlType: ControlTypes.check, order:4, required:true,value:null },   
//   ];
  constructor() { }

  ngOnInit() {
    this.form= this.toFormGroup(this.formFields)
  }
   isValid(key:string) {
      return this.form.controls[key].valid;
       }
  toFormGroup(fields: FormFieldBase<any>[] ) {
    let group: any = {}; 
    fields.forEach(field => {
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