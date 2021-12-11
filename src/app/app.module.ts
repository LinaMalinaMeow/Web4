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
import { Routes, RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {PointService} from "./point.service";


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'main', component: MessageComponent},

  { path: '',   redirectTo: 'login', pathMatch: 'full' }
];
registerLocaleData(localeRu, 'ru')
/*For creating modules*/
@NgModule({
  imports: [BrowserModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    MessageModule,
    InputTextModule,
    RouterModule.forRoot(routes),
    TableModule,
    HttpClientModule,
],
  /*view classes*/
  declarations: [AppComponent, MessageComponent, LoginPageComponent, ],
  /*this classes create service, used module*/
  providers: [PointService],
  /*root component, который вызывается по умолчанию при загрузке приложения*/
  bootstrap: [AppComponent],
})
export class AppModule {}
