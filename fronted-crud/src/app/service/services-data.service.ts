import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {
  constructor(private http: HttpClient) {

  }
  getDataTable(): Observable<any> {
    return this.http.get<any>('http://localhost:8090/api/utils');
  }
  getDataFilter(state: boolean): Observable<any> {
    return this.http.get<any>('http://localhost:8090/api/utils/orden?orden=' + state);
  }
  setNewUser(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:8090/api/manager/register', data);
  }
  deleteUser(username: string): Observable<any> {
    return this.http.delete<any>('http://localhost:8090/api/manager/?username=' + username);
  }
  getUserByUsername(username: string): Observable<any> {
    return this.http.get<any>('http://localhost:8090/api/utils/user?username=' + username);
  }
  setUserData(username: string, data: any): Observable<any> {
    return this.http.put<any>('http://localhost:8090/api/utils/users?username=' + username, data);
  }

  getSearch(username: string): Observable<any> {
    return this.http.get<any>('http://localhost:8090/api/utils/category?category=' + username);

  }
}
