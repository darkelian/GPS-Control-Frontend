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

  constructor(private dataService: ServicesDataService, private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.recordToEdit$.subscribe(record => {
      this.id = record.id;
      this.brand = record.brand;
      this.branch = record.branch;
      this.applicant = record.applicant;
      this.isEditAction = true; // Marcar que es una acción de edición
      this.isInputEnabled = true; // Habilitar inputs
      this.isDeleteAction = false; // Resetear acción de eliminación
      this.isExpanded = true;
      this.footerVisible = true;
      this.sharedService.setEditingDisabled(true); // Deshabilitar botones de editar y eliminar en la tabla
    });

    this.sharedService.recordToDelete$.subscribe(record => {
      this.id = record.id;
      this.brand = record.brand;
      this.branch = record.branch;
      this.applicant = record.applicant;
      this.isDeleteAction = true; // Marcar que es una acción de eliminación
      this.isInputEnabled = false; // Deshabilitar inputs
      this.isEditAction = false; // Resetear acción de edición
      this.isExpanded = true;
      this.footerVisible = true;
      this.sharedService.setEditingDisabled(true); // Deshabilitar botones de editar y eliminar en la tabla
    });
  }

  toggleExpand() {
    if (this.isExpanded) {
      this.footerVisible = false;
      setTimeout(() => {
        this.isExpanded = false;
      }, 100);
      this.resetForm();
      this.isInputEnabled = false; // Deshabilitar inputs al contraer
      this.isDeleteAction = false; // Resetear acción de eliminación
      this.isEditAction = false; // Resetear acción de edición
      this.sharedService.setEditingDisabled(false); // Habilitar botones de editar y eliminar en la tabla
    } else {
      this.isExpanded = true;
      setTimeout(() => {
        this.footerVisible = true;
      }, 100);
      this.isInputEnabled = !this.isDeleteAction; // Habilitar inputs al expandir, solo si no es eliminación
    }
  }

  createRecord() {
    if (!this.isDeleteAction && !this.isEditAction) { // Solo crear si no es una acción de eliminación o edición
      const newRecord = {
        brand: this.brand,
        branch: this.branch,
        applicant: this.applicant
      };
      this.dataService.createRecord(newRecord).subscribe(response => {
        console.log('Record created successfully:', response);
        this.sharedService.triggerUpdateTable();
        this.toggleExpand(); // Contraer la tarjeta después de crear el registro
        this.resetForm();
      }, error => {
        console.error('Error creating record:', error);
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
        console.log('Record deleted successfully:', response);
        this.sharedService.triggerUpdateTable();
        this.toggleExpand(); // Contraer la tarjeta después de eliminar el registro
        this.resetForm();
        this.isDeleteAction = false; // Resetear acción de eliminación
      }, error => {
        console.error('Error deleting record:', error);
      });
    }
  }

  cancelDelete() {
    this.resetForm();
    this.toggleExpand(); // Contraer la tarjeta
    this.isDeleteAction = false; // Resetear acción de eliminación
    this.sharedService.setEditingDisabled(false); // Habilitar botones de editar y eliminar en la tabla
  }

  resetForm() {
    this.id = null;
    this.brand = '';
    this.branch = '';
    this.applicant = '';
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
        console.log('Record updated successfully:', response);
        this.sharedService.triggerUpdateTable();
        this.toggleExpand(); // Contraer la tarjeta después de actualizar el registro
        this.resetForm();
        this.isEditAction = false; // Resetear acción de edición
      }, error => {
        console.error('Error updating record:', error);
      });
    }
  }

  cancelEdit() {
    this.resetForm();
    this.toggleExpand(); // Contraer la tarjeta
    this.isEditAction = false; // Resetear acción de edición
    this.sharedService.setEditingDisabled(false); // Habilitar botones de editar y eliminar en la tabla
  }
}
