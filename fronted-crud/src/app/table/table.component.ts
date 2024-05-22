import { Component, OnInit } from '@angular/core';
import { ServicesDataService } from '../service/services-data.service';
import { SharedService } from '../service/shared.service';
import { Subscription } from 'rxjs';

interface TableRow {
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
  private subscription: Subscription = new Subscription();;
  constructor(private dataService: ServicesDataService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.updateTable();
    this.subscription = this.sharedService.updateTable$.subscribe(() => {
      this.updateTable();
    });
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
}
