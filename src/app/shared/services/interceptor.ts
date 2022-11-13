import {Injectable} from "@angular/core";
import { HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class ReqInterceptor implements HttpInterceptor {
  private env = environment;
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const daReq = req.clone({
      url:`${this.env.serverUrl}${req.url}`
    });
    return next.handle(daReq)
  }
}
