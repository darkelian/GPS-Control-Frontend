import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {
  constructor(private http: HttpClient) { }

  getDataTable(): Observable<any> {
    return this.http.get<any>('https://gps-control-backend.onrender.com/api/all');
  }

  createRecord(record: any): Observable<any> {
    return this.http.post<any>('https://gps-control-backend.onrender.com/api/create', record);
  }

  deleteRecord(record: any): Observable<any> {
    return this.http.request<any>('delete', 'https://gps-control-backend.onrender.com/api/delete', { body: record });
  }

  updateRecord(record: any): Observable<any> {
    return this.http.put<any>('https://gps-control-backend.onrender.com/api/update', record);
  }
}
