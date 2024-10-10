import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/Message.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string ='https://porfoliorodr1alexdev.store/enviar'
  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<any>{
    return this.http.post<any>(`${this.url}`, message);
  }
}
