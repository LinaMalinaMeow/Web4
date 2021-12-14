import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, Validators} from "@angular/forms";
import {CommonModule, registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import {MessageComponent} from './main-page/main-page.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from "primeng/ripple";
import {MessageModule} from "primeng/message";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from 'primeng/table';
import {LoginPageComponent} from "./login-page/login-page.component";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {PointService} from "./point.service";
import {AppRoutingModule} from "./app-routing.module";
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";


registerLocaleData(localeRu, 'ru')
/*For creating modules*/
@NgModule({
  imports: [BrowserModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    MessageModule,
    InputTextModule,
    TableModule,
    HttpClientModule,
    AppRoutingModule,
],
  /*view classes*/
  declarations: [AppComponent, MessageComponent, LoginPageComponent, NotFoundComponent, ],
  /*this classes create service, used module*/
  providers: [PointService,AuthService,AuthGuardService],
  /*root component, который вызывается по умолчанию при загрузке приложения*/
  bootstrap: [AppComponent],
})
export class AppModule {}
