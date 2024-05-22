import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private updateTableSubject = new Subject<void>();
  private recordToEditSubject = new Subject<any>();
  private recordToDeleteSubject = new Subject<any>(); // Añadir sujeto para eliminar registro
  private editingDisabledSubject = new Subject<boolean>();

  updateTable$ = this.updateTableSubject.asObservable();
  recordToEdit$ = this.recordToEditSubject.asObservable();
  recordToDelete$ = this.recordToDeleteSubject.asObservable(); // Observable para eliminar registro
  editingDisabled$ = this.editingDisabledSubject.asObservable();

  triggerUpdateTable() {
    this.updateTableSubject.next();
  }

  setRecordToEdit(record: any) {
    this.recordToEditSubject.next(record);
  }

  setRecordToDelete(record: any) {
    this.recordToDeleteSubject.next(record); // Método para eliminar registro
  }

  setEditingDisabled(disabled: boolean) {
    this.editingDisabledSubject.next(disabled);
  }
}
