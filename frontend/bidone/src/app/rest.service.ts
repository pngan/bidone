import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IFullName } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl = 'https://localhost:44314/'; // todo change the hardcoded url to a configuration parameter defined at deployment time
  constructor(private http: HttpClient) { }

  submitName(fullName: IFullName): Observable<string> {
    const headersRequest = {
      'Content-Type': 'application/json'
    };
    console.log(`%o %o %o`, fullName.firstName, fullName.lastName, `${this.baseUrl}api/values`);
    return this.http.post<string>(`${this.baseUrl}api/values`, JSON.stringify(fullName), { headers: headersRequest });
  }
}
