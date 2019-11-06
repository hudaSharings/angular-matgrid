import { Component } from "@angular/core";
import {
  IColumn,
  MatGrid,
  FieldTypes,
  IField,
  FormFieldBase,
  TextboxField,
  Dropdownield
} from "./materials/models";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  date: Date;
  isActive: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: "Hydrogen",
    weight: 1.0079,
    symbol: "H",
    date: new Date(),
    isActive: false
  },
  {
    position: 2,
    name: "Helium",
    weight: 4.0026,
    symbol: "He",
    date: new Date(),
    isActive: true
  },
  {
    position: 3,
    name: "Lithium",
    weight: 6.941,
    symbol: "Li",
    date: new Date(),
    isActive: true
  },
  {
    position: 4,
    name: "Beryllium",
    weight: 9.0122,
    symbol: "Be",
    date: new Date(),
    isActive: true
  },
  {
    position: 5,
    name: "Boron",
    weight: 10.811,
    symbol: "B",
    date: new Date(),
    isActive: true
  },
  {
    position: 6,
    name: "Carbon",
    weight: 12.0107,
    symbol: "C",
    date: new Date(),
    isActive: true
  },
  {
    position: 7,
    name: "Nitrogen",
    weight: 14.0067,
    symbol: "N",
    date: new Date(),
    isActive: true
  },
  {
    position: 8,
    name: "Oxygen",
    weight: 15.9994,
    symbol: "O",
    date: new Date(),
    isActive: true
  },
  {
    position: 9,
    name: "Fluorine",
    weight: 18.9984,
    symbol: "F",
    date: new Date(),
    isActive: false
  },
  {
    position: 10,
    name: "Neon",
    weight: 20.1797,
    symbol: "Ne",
    date: new Date(),
    isActive: true
  },
  {
    position: 11,
    name: "Hydrogen",
    weight: 1.0079,
    symbol: "H",
    date: new Date(),
    isActive: true
  },
  {
    position: 12,
    name: "Helium",
    weight: 4.0026,
    symbol: "He",
    date: new Date(),
    isActive: true
  },
  {
    position: 13,
    name: "Lithium",
    weight: 6.941,
    symbol: "Li",
    date: new Date(),
    isActive: true
  },
  {
    position: 14,
    name: "Beryllium",
    weight: 9.0122,
    symbol: "Be",
    date: new Date(),
    isActive: false
  },
  {
    position: 15,
    name: "Boron",
    weight: 10.811,
    symbol: "B",
    date: new Date(),
    isActive: true
  },
  {
    position: 16,
    name: "Carbon",
    weight: 12.0107,
    symbol: "C",
    date: new Date(),
    isActive: true
  },
  {
    position: 17,
    name: "Nitrogen",
    weight: 14.0067,
    symbol: "N",
    date: new Date(),
    isActive: true
  },
  {
    position: 18,
    name: "Oxygen",
    weight: 15.9994,
    symbol: "O",
    date: new Date(),
    isActive: true
  },
  {
    position: 19,
    name: "Fluorine",
    weight: 18.9984,
    symbol: "F",
    date: new Date(),
    isActive: true
  },
  {
    position: 20,
    name: "Neon",
    weight: 20.1797,
    symbol: "Ne",
    date: new Date(),
    isActive: true
  },
  {
    position: 21,
    name: "Hydrogen",
    weight: 1.0079,
    symbol: "H",
    date: new Date(),
    isActive: true
  },
  {
    position: 22,
    name: "Helium",
    weight: 4.0026,
    symbol: "He",
    date: new Date(),
    isActive: false
  },
  {
    position: 23,
    name: "Lithium",
    weight: 6.941,
    symbol: "Li",
    date: new Date(),
    isActive: true
  },
  {
    position: 24,
    name: "Beryllium",
    weight: 9.0122,
    symbol: "Be",
    date: new Date(),
    isActive: true
  },
  {
    position: 25,
    name: "Boron",
    weight: 10.811,
    symbol: "B",
    date: new Date(),
    isActive: true
  },
  {
    position: 26,
    name: "Carbon",
    weight: 12.0107,
    symbol: "C",
    date: new Date(),
    isActive: true
  },
  {
    position: 27,
    name: "Nitrogen",
    weight: 14.0067,
    symbol: "N",
    date: new Date(),
    isActive: true
  },
  {
    position: 28,
    name: "Oxygen",
    weight: 15.9994,
    symbol: "O",
    date: new Date(),
    isActive: false
  },
  {
    position: 29,
    name: "Fluorine",
    weight: 18.9984,
    symbol: "F",
    date: new Date(),
    isActive: true
  },
  {
    position: 30,
    name: "Neon",
    weight: 20.1797,
    symbol: "Ne",
    date: new Date(),
    isActive: true
  }
];

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent extends MatGrid {
  name = "Angular";
  fields = [];
  Columns = [
    { name: "position", field: "position", searchFieldType: FieldTypes.number },
    { name: "name", field: "name", searchFieldType: FieldTypes.text },
    { name: "Email", field: "email", searchFieldType: FieldTypes.email },
    { name: "weight", field: "weight", searchFieldType: FieldTypes.number },
    { name: "symbol", field: "symbol", searchFieldType: FieldTypes.text },
    { name: "Date", field: "date", searchFieldType: FieldTypes.date },
    { name: "is Active", field: "isActive", searchFieldType: FieldTypes.check }
  ];
  rowData = ELEMENT_DATA;

  constructor() {
    super();
    this.fields = this.getFields(this.Columns); //this.getFormFields();
  }

  getSelectedRow(selectedRows: any) {
    console.log(selectedRows);
    alert(JSON.stringify(selectedRows));
  }
  onDetail(item: any) {
    alert(JSON.stringify(item));
  }
  onDelete(item: any) {
    alert(JSON.stringify(item));
  }
  onEdit(item: any) {
    alert(JSON.stringify(item));
  }
  getFormValues(values: any) {
    debugger;
    alert(JSON.stringify(values));
  }

  getFormFields() {
    let questions: FormFieldBase<any>[] = [
      new Dropdownield({
        key: "brave",
        label: "Bravery Rating",
        isApi: true,
        url: "",
        // options: [
        //   {key: 'solid',  value: 'Solid'},
        //   {key: 'great',  value: 'Great'},
        //   {key: 'good',   value: 'Good'},
        //   {key: 'unproven', value: 'Unproven'}
        // ],
        order: 3
      }),

      new TextboxField({
        key: "firstName",
        label: "First name",
        value: "Bombasto",
        required: true,
        order: 1
      }),

      new TextboxField({
        key: "emailAddress",
        label: "Email",
        type: "email",
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getFields(columns:IColumn[]) {
    let Fields: FormFieldBase<any>[] = [];
    columns.forEach(column => {
      debugger;
      let _type = column.searchFieldType;
      let filed: FormFieldBase<any>;
      switch (_type) {
        case FieldTypes.text:
          filed = new TextboxField({
            key: column.field,
            label: column.name,
            type: "text",
            order: 1
          });
          break;
        case FieldTypes.email:
          filed = new TextboxField({
            key: column.field,
            label: column.name,
            type: "email",
            order: 2
          });
          break;
        case FieldTypes.number:
          filed = new TextboxField({
            key: column.field,
            label: column.name,
            type: "number",
            order: 3
          });
          break;
      }
      if(filed)
      Fields.push(filed);
    });
    return Fields;
  }
}
