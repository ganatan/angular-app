import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

const MCP = false;

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (MCP) {
    console.log(`MCP active: Intercepted URL - ${req.url}`);
  }

  return next(req);
}
