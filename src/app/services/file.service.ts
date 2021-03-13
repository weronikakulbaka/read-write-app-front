import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private endpoint: string = 'http://localhost:62188/api';

  constructor(private http: HttpClient) { }

  importData(): Observable<string> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/plain, */*',
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json'
    };

    return this.http.post<string>(`${this.endpoint}/upload`, "", httpOptions);
  }

}
