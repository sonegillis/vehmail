import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UsermanagerService} from '../usermanager/usermanager.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _token = '';

  get token(): string {
    return this._token;
  }

  set token(token) {
    this._token = token;
  }

  constructor(private http: HttpClient) { }

  post(url, params): Observable<any> {
    const headers = new HttpHeaders();
    // headers.set('Authorization', `Token ${this.token}`);
    return this.http.post(url, params, {headers});
  }

  get(url, params): Observable<any> {
    const headers = new HttpHeaders();
    // headers.set('Authorization', `Token ${this.token}`);
    let requestParams = '?';
    for (const [key, value] of Object.entries(params))  {
      requestParams += `${key}=${value}&`;
    }
    url += requestParams;
    return this.http.get(url, {headers});
  }
}
