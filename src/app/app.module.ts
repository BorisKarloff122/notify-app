import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReqInterceptor} from "./shared/services/interceptor";
import {CanLoadGuard} from "./shared/guards/can-load.guard";
import {CanActivateGuard} from "./shared/guards/can-activate.guard";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [CanLoadGuard, CanActivateGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: ReqInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
