import { Component, OnInit } from '@angular/core';

interface TableRow {
  marca: string;
  sucursal: string;
  aspirante: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  rows: TableRow[] = [
    { marca: 'Mazda', sucursal: 'Chapínero', aspirante: 'David Sandoval' },
    { marca: 'Mercedes', sucursal: 'Localidad', aspirante: 'Nombre Apellido' },
    // Añade más filas según sea necesario
  ];

  constructor() { }

  ngOnInit(): void { }
}
