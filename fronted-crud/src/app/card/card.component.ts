import { Component } from '@angular/core';
import { ServicesDataService } from '../service/services-data.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  isExpanded = false;
  footerVisible = false;
  brand = '';
  branch = '';
  applicant = '';

  constructor(private dataService: ServicesDataService, private sharedService: SharedService) { }

  toggleExpand() {
    if (this.isExpanded) {
      this.footerVisible = false;
      setTimeout(() => {
        this.isExpanded = false;
      }, 500);
      this.resetForm();
    } else {
      this.isExpanded = true;
      setTimeout(() => {
        this.footerVisible = true;
      }, 200);
    }
  }

  createRecord() {
    const newRecord = {
      brand: this.brand,
      branch: this.branch,
      applicant: this.applicant
    };
    this.dataService.createRecord(newRecord).subscribe(response => {
      console.log('Record created successfully:', response);
      this.toggleExpand();
      this.resetForm();
      this.sharedService.triggerUpdateTable(); // Mueve esta llamada aquí
    }, error => {
      console.error('Error creating record:', error);
    });
  }

  resetForm() {
    this.brand = '';
    this.branch = '';
    this.applicant = '';
  }
}
