import { Component, OnInit } from '@angular/core';
import { ServicesDataService } from '../service/services-data.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isExpanded = false;
  footerVisible = false;
  isInputEnabled = false;
  isDeleteAction = false;
  isEditAction = false;
  brand = '';
  branch = '';
  applicant = '';
  id: number | null = null;

  constructor(private dataService: ServicesDataService, private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.recordToEdit$.subscribe(record => {
      this.id = record.id;
      this.brand = record.brand;
      this.branch = record.branch;
      this.applicant = record.applicant;
      this.isEditAction = true;
      this.isDeleteAction = false;
      this.isInputEnabled = true; // Habilitar inputs solo para edición
      this.isExpanded = true;
      this.footerVisible = true;
      this.sharedService.setEditingDisabled(true);
    });

    this.sharedService.recordToDelete$.subscribe(record => {
      this.id = record.id;
      this.brand = record.brand;
      this.branch = record.branch;
      this.applicant = record.applicant;
      this.isDeleteAction = true;
      this.isEditAction = false;
      this.isInputEnabled = false; // Deshabilitar inputs para eliminación
      this.isExpanded = true;
      this.footerVisible = true;
      this.sharedService.setEditingDisabled(true);
    });
  }

  toggleExpand() {
    if (this.isExpanded) {
      this.footerVisible = false;
      this.sharedService.triggerCancelAction();
      setTimeout(() => {
        this.isExpanded = false;
      }, 100);
      this.resetForm();
      this.isInputEnabled = false;
      this.isDeleteAction = false;
      this.isEditAction = false;
      this.sharedService.setEditingDisabled(false);
    } else {
      this.isExpanded = true;
      setTimeout(() => {
        this.footerVisible = true;
      }, 100);
      this.isInputEnabled = true;
    }
  }

  createRecord() {
    if (!this.isDeleteAction && !this.isEditAction) {
      const newRecord = {
        brand: this.brand,
        branch: this.branch,
        applicant: this.applicant
      };
      this.dataService.createRecord(newRecord).subscribe(response => {
        this.sharedService.triggerUpdateTable();
        this.toggleExpand();
        this.resetForm();
      });
    }
  }

  deleteRecord() {
    if (this.id !== null) {
      const recordToDelete = {
        id: this.id,
        brand: this.brand,
        branch: this.branch,
        applicant: this.applicant
      };
      this.dataService.deleteRecord(recordToDelete).subscribe(response => {
        this.sharedService.triggerUpdateTable();
        this.toggleExpand();
        this.resetForm();
      });
    }
  }

  updateRecord() {
    if (this.id !== null) {
      const recordToUpdate = {
        id: this.id,
        brand: this.brand,
        branch: this.branch,
        applicant: this.applicant
      };
      this.dataService.updateRecord(recordToUpdate).subscribe(response => {
        this.sharedService.triggerUpdateTable();
        this.toggleExpand();
        this.resetForm();
      });
    }
  }

  cancelDelete() {
    this.resetForm();
    this.toggleExpand();
    this.isDeleteAction = false;
    this.sharedService.setEditingDisabled(false);
    this.sharedService.triggerCancelAction();
  }

  cancelEdit() {
    this.resetForm();
    this.toggleExpand();
    this.isEditAction = false;
    this.sharedService.setEditingDisabled(false);
    this.sharedService.triggerCancelAction();
  }

  resetForm() {
    this.id = null;
    this.brand = '';
    this.branch = '';
    this.applicant = '';
  }
}
