import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from '../services/auth.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router,  private authService: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if ([401, 403].indexOf(err.status) !== -1) {
          this.authService.Logout();
          this.router.navigate(['/auth/login']);
        }

        return throwError(err);
      })
    );
  }
}
