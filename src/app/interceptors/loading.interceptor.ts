import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoandingService } from '../services/loanding.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loandingService: LoandingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loandingService.setLoanding(true);
    return next.handle(request).pipe(
      finalize(() => this.loandingService.setLoanding(false))
    );
  }
}
