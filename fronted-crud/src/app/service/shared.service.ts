import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private updateTableSubject = new Subject<void>();
  private recordToEditSubject = new Subject<any>();
  private recordToDeleteSubject = new Subject<any>();
  private editingDisabledSubject = new Subject<boolean>();
  private cancelActionSubject = new Subject<void>();

  updateTable$ = this.updateTableSubject.asObservable();
  recordToEdit$ = this.recordToEditSubject.asObservable();
  recordToDelete$ = this.recordToDeleteSubject.asObservable();
  editingDisabled$ = this.editingDisabledSubject.asObservable();
  cancelAction$ = this.cancelActionSubject.asObservable();

  triggerUpdateTable() {
    this.updateTableSubject.next();
  }

  setRecordToEdit(record: any) {
    this.recordToEditSubject.next(record);
  }

  setRecordToDelete(record: any) {
    this.recordToDeleteSubject.next(record);
  }

  setEditingDisabled(disabled: boolean) {
    this.editingDisabledSubject.next(disabled);
  }

  triggerCancelAction() {
    this.cancelActionSubject.next();
  }
}
