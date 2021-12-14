import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./login-page/login-page.component";
import {MessageComponent} from "./main-page/main-page.component";
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'main', component: MessageComponent},
  {path: '**', component: NotFoundComponent},

  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
