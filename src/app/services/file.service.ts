import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private endpoint: string = 'http://localhost:62188/api';

  constructor(private http: HttpClient) { }

  importData(newdata: Product[]): Observable<Product[]> {
    const sendData = (newdata == null ? {} : newdata);
    return this.http.post<Product[]>(`${this.endpoint}/upload`, sendData);
  }

}
