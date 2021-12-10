import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, Validators} from "@angular/forms";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import {MessageComponent} from './message/message.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from "primeng/ripple";
import {MessageModule} from "primeng/message";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from 'primeng/table';

registerLocaleData(localeRu, 'ru')
@NgModule({
  declarations: [AppComponent, MessageComponent, ],
  imports: [BrowserModule, FormsModule, ButtonModule, RippleModule, MessageModule, InputTextModule, TableModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
