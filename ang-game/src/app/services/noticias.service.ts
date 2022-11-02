import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  url = " http://localhost:3000/noticias"

  constructor(private httpClient: HttpClient) { }

  getNoticias(): Observable<Noticia[]> {
    return this.httpClient.get<Noticia[]>(this.url)

  }
}
