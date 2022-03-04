import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAccountComponent } from './account/list-account/list-account.component';
import { ListRequestComponent } from './reimbursement/list-request/list-request.component';


@NgModule({
  declarations: [
    AppComponent,
    ListAccountComponent,
    ListRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
