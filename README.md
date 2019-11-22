# angular-matgrid

## Material Table as ReuseableComponent with Dynamic Search, Sorting, Paging and Dynamic Form to Creat New Record
### Configuring the columns and Rowdata like this below 
 Columns = [  </br>
    { name: "position", field: "position", searchFieldType: FieldTypes.number },</br>
    { name: "name", field: "name", searchFieldType: FieldTypes.text },</br>
    { name: "Email", field: "email", searchFieldType: FieldTypes.email },</br>
    { name: "weight", field: "weight", searchFieldType: FieldTypes.number },</br>
    { name: "symbol", field: "symbol", searchFieldType: FieldTypes.text },</br>
    { name: "Date", field: "date", searchFieldType: FieldTypes.date },</br>
    { name: "is Active", field: "isActive", searchFieldType: FieldTypes.check }</br>
  ];
  </br>
  rowData = ELEMENT_DATA;
### see the demo <a href="https://angular-matgrid.stackblitz.io/">here</a>
