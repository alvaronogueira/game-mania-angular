import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Novidade } from '../models/novidade';

@Injectable({
  providedIn: 'root'
})
export class NovidadesService {
  url = "http://localhost:3000/novidades"

  constructor(private httpClient: HttpClient) { }
  
  getNovidades(): Observable<Novidade[]>{
    return this.httpClient.get<Novidade[]>(this.url)
  }

}
