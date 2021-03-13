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

  importData(): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.endpoint}/upload`, {product:"dell"});
  }

}
