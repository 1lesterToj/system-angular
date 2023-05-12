import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('hola estoy en el componente tabla')
  }

}
