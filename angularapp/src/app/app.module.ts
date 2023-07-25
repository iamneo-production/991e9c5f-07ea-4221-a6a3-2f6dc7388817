import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechargeDetailsComponent } from './user/recharge-details/recharge-details.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { NotificationComponent } from './user/notification/notification.component';
import { ReviewComponent } from './user/review/review.component';
import { ShowReviewComponent } from './user/review/show-review/show-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    RechargeDetailsComponent,
    UserNavbarComponent,
    NotificationComponent,
    ReviewComponent,
    ShowReviewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
