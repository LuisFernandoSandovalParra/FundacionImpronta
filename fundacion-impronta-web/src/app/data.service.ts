import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  sendMessage(name: string, emailuser: string, phone: string, message: string): Observable <any>{
    return this.http.post<any>(this.apiUrl + '/form/send', {
      'name': name,
      'emailuser': emailuser,
      'phone': phone,
      'message': message
    });
  }
}
