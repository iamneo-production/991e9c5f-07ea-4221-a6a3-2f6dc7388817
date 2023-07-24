import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechargeDetailsComponent } from './user/recharge-details/recharge-details.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    RechargeDetailsComponent,
    UserNavbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
