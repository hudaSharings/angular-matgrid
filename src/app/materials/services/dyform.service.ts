import { Injectable } from "@angular/core";
import { IColumn, FormFieldBase, FieldTypes, InputField } from "../models";

@Injectable()
export class DyformService {
  constructor() {}
  
    getFields(columns: IColumn[]) {
      let Fields: FormFieldBase<any>[] = [];
      columns.forEach(column => {
        debugger;
        let _type = column.searchFieldType;
        let field: FormFieldBase<any>;
        switch (_type) {
          case FieldTypes.text:
            field = new InputField({
              key: column.field,
              label: column.name,
              type: "text",
              order: 1
            });
            break;
          case FieldTypes.email:
            field = new InputField({
              key: column.field,
              label: column.name,
              type: "email",
              order: 2
            });
            break;
          case FieldTypes.number:
            field = new InputField({
              key: column.field,
              label: column.name,
              type: "number",
              order: 3
            });
            break;
          case FieldTypes.date:
            field = new InputField({
              key: column.field,
              label: column.name,
              type: "date",
              order: 3
            });
            break;
          case FieldTypes.check:
            field = new InputField({
              key: column.field,
              label: column.name,
              type: "checkbox",
              order: 3
            });
            break;
        }
        if (field) Fields.push(field);
      });
      return Fields;
    }
    SetFiledValues(columns:IColumn[],fields: FormFieldBase<any>[],data:any){
    let _fileds=fields;
    let _data=data;
      columns.forEach(x=>{
        debugger;
        _fileds.map(f=>{
          if(f.key==x.field){
            f.value=data[x.field]
            //console.log(f);
          }
        })
      })

    return _fileds;  
  }
}
