import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor(private http: HttpClient) { }

  userCreateService(data: any): Observable<any>{
    return this.http.post<any>(environment.urls.userSignup, data)
  }
  getAllUser(): Observable<any>{
    return this.http.get<any>(environment.urls.getAllUser)
  }

}
