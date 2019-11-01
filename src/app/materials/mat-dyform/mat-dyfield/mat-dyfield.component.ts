import { Component, OnInit , Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{IField,ControlTypes,FormFieldBase} from '../../models'
@Component({
  selector: 'app-mat-dyfield',
  templateUrl: './mat-dyfield.component.html',
  styleUrls: ['./mat-dyfield.component.css']
})
export class MatDyfieldComponent implements OnInit {
  @Input() question: FormFieldBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
  constructor() { }

  ngOnInit() {
  }

}