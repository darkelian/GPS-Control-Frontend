import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
editingDisabled: any;
sendRecordToDelete(_t8: any) {
throw new Error('Method not implemented.');
}
  rows = [
    { marca: 'Mazda', sucursal: 'Chapínero', aspirante: 'David Sandoval' },
    { marca: 'Mercedes', sucursal: 'Localidad', aspirante: 'Nombre Apellido' },
    // Agrega más filas según sea necesario
  ];
sendRecordToCard: any;

  editRow(row: any) {
    // Lógica para editar la fila
  }

  deleteRow(row: any) {
    // Lógica para eliminar la fila
  }
}
