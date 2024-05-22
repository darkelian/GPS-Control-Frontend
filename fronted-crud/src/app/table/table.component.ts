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
  editingDisabled: boolean = false;
  selectedRowIndex: number | null = null;

  constructor(private dataService: ServicesDataService, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.updateTable();
    this.subscription = this.sharedService.updateTable$.subscribe(() => {
      this.updateTable();
    });
    this.subscription.add(
      this.sharedService.cancelAction$.subscribe(() => {
        this.resetIcons();
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

  sendRecordToEdit(record: TableRow, index: number) {
    this.selectedRowIndex = index;
    this.sharedService.setRecordToEdit(record);
    this.editingDisabled = true;
  }

  sendRecordToDelete(record: TableRow, index: number) {
    this.selectedRowIndex = index;
    this.sharedService.setRecordToEdit(record);
    this.editingDisabled = true;
  }

  resetIcons() {
    this.selectedRowIndex = null;
    this.editingDisabled = false;
  }
}
