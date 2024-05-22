import { Component, OnInit } from '@angular/core';
import { ServicesDataService } from '../service/services-data.service';
import { SharedService } from '../service/shared.service';
import { Subscription } from 'rxjs';

interface TableRow {
  id: number;
  brand: string;
  branch: string;
  applicant: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  rows: TableRow[] = [];
  private subscription: Subscription = new Subscription();
  editingDisabled = false;
  activeRowId: number | null = null;

  constructor(private dataService: ServicesDataService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.updateTable();
    this.subscription = this.sharedService.updateTable$.subscribe(() => {
      this.updateTable();
    });

    this.subscription.add(
      this.sharedService.editingDisabled$.subscribe(disabled => {
        this.editingDisabled = disabled;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateTable() {
    this.dataService.getDataTable().subscribe(response => {
      if (response.success) {
        this.rows = response.data;
      }
    });
  }

  sendRecordToCard(record: TableRow) {
    this.sharedService.setRecordToEdit(record);
    this.activeRowId = record.id; // Establecer la fila activa para edición
  }

  sendRecordToDelete(record: TableRow) {
    this.sharedService.setRecordToDelete(record);
    this.activeRowId = record.id; // Establecer la fila activa para eliminación
  }

  resetIcons() {
    this.activeRowId = null; // Restablecer la fila activa
  }
}
