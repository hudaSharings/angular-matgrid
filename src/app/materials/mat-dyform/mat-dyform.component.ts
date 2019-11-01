import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-dyform',
  templateUrl: './mat-dyform.component.html',
  styleUrls: ['./mat-dyform.component.css']
})
export class MatDyformComponent implements OnInit {

Columns = [
    { name: "position", field: "position", searchFieldType: "number" },
    { name: "name", field: "name", searchFieldType: "string" },
    { name: "DateOfBirth", field: "weight", searchFieldType: "number" },
    { name: "symbol", field: "symbol", searchFieldType: "string" }
  ];
  constructor() { }

  ngOnInit() {
  }

}