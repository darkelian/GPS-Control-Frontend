import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private updateTableSubject = new Subject<void>();

  // Observable para que otros componentes se suscriban a las actualizaciones
  updateTable$ = this.updateTableSubject.asObservable();

  // Método para disparar la actualización
  triggerUpdateTable() {
    this.updateTableSubject.next();
  }
}
