/*******************************************************************************
 * Copyright (c) 2020. User : kalai
 ******************************************************************************/
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class HttpServiceInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log(req);
    const modifiedRequest = req.clone({
      headers: req.headers
        .append('Custom', 'Selvan')
    });
    return next.handle(modifiedRequest)
      .pipe(
        tap(e => {
         // console.log(e);
          if (e.type === HttpEventType.Sent) {
           // console.log(e);
          }
          if (e.type === HttpEventType.Response) {
            //console.log(e);
          }
        }));
  }
}
