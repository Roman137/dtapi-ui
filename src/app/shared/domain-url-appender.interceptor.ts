import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {urlConfig} from './url.config';

@Injectable()
export class DomainUrlAppenderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = urlConfig.domain;
    req = req.clone({
      url: url + req.url
    });
    return next.handle(req);
  }
}
