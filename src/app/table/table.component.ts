import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent implements OnInit {
@Input() nome:string;
@Input() descrizione:string;
@Input() valore:number;

  constructor() { }

  ngOnInit() {
  }

}
