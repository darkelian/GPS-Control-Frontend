import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {
  constructor(private http: HttpClient) { }

  getDataTable(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/all');
  }

  createRecord(record: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/create', record);
  }

  deleteRecord(record: any): Observable<any> { // Asegúrate de que este método acepta un objeto
    return this.http.request<any>('delete', 'http://localhost:8080/api/delete', { body: record });
  }

  updateRecord(record: any): Observable<any> { // Agregar método para actualizar registro
    return this.http.put<any>('http://localhost:8080/api/update', record);
  }
}
