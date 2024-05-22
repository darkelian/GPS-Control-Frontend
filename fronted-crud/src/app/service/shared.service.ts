import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private updateTableSubject = new Subject<void>();
  private recordToEditSubject = new Subject<any>();
  private editingDisabledSubject = new Subject<boolean>();

  updateTable$ = this.updateTableSubject.asObservable();
  recordToEdit$ = this.recordToEditSubject.asObservable();
  editingDisabled$ = this.editingDisabledSubject.asObservable();

  triggerUpdateTable() {
    this.updateTableSubject.next();
  }

  setRecordToEdit(record: any) {
    this.recordToEditSubject.next(record);
  }

  setEditingDisabled(disabled: boolean) {
    this.editingDisabledSubject.next(disabled);
  }
}
