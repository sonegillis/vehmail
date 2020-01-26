import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from './services/http/http.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private httpService: HttpService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.httpService.token && this.httpService.token.length > 0) {
      const customReq = request.clone({
        setHeaders: {
          // 'Content-Type' : 'application/json; charset=utf-8',
          // 'Accept'       : 'application/json',
          Authorization: `Token ${this.httpService.token}`,
        },
      });
      return next.handle(customReq);
    }
    return next.handle(request.clone());
  }
}
