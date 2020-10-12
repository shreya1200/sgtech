import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from './info.model';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendEmail(obj): Observable<Info> {
    console.log(obj);
    return this.http.post<Info>('http://localhost:3000/sendmail', obj);
    
  }
}
