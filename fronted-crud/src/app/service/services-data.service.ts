import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs/internal/Observable';

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
}
