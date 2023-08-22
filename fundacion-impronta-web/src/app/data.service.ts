import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = `http://localhost:3000/api`;
  constructor(private http: HttpClient) {}

  getProjectList(): Observable<any>{
    return this.http.get<any>(this.apiUrl + '/projects/list');
  }

  sendMessage(
    name: string,
    emailUser: string,
    phone: string,
    message: string
  ): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/form/send', {
      name: name,
      emailUser: emailUser,
      phone: phone,
      message: message,
    });
  }

  sendVolunteerEmail(
    first_name: string,
    last_name: string,
    email: string,
    phone: number,
    academic_level: string,
    habilities: string,
    work_hours: number,
    modality: string,
    interest_population: string
  ) {
    return this.http.post<any>(this.apiUrl + '/volunteers/form/send', {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      academic_level: academic_level,
      habilities: habilities,
      work_hours: work_hours,
      modality: modality,
      interest_population: interest_population,
    });
  }

  getIntegrity(amount: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/donations/pay/${amount}`);
  }
}
