import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrepaidPlanComponent } from './admin/prepaid/prepaid-plan/prepaid-plan.component';
import { AddPrepaidComponent } from './admin/prepaid/add-prepaid/add-prepaid.component';
import { UpdatePrepaidComponent } from './admin/prepaid/update-prepaid/update-prepaid.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AddAddonComponent } from './admin/addon/add-addon/add-addon.component';
import { UpdateAddonComponent } from './admin/addon/update-addon/update-addon.component';
<<<<<<< HEAD
import { AddonComponent } from './admin/addon/addon.component';
=======
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
import { AddPostpaidComponent } from './admin/postpaid/add-postpaid/add-postpaid.component';
import { UpdatePostpaidComponent } from './admin/postpaid/update-postpaid/update-postpaid.component';
import { PostpaidPlanComponent } from './admin/postpaid/postpaid-plan/postpaid-plan.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddonsComponent } from './user/addons/addons.component';
import { NotificationComponent } from './user/notification/notification.component';
import { PopularPlansComponent } from './user/popular-plans/popular-plans.component';
import { RechargeDetailsComponent } from './user/recharge-details/recharge-details.component';
import { ReviewComponent } from './user/review/review.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
<<<<<<< HEAD
=======
import { AddonPlanComponent } from './admin/addon/addon-plan/addon-plan.component';
import { ShowReviewComponent } from './user/review/show-review/show-review.component';
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13


@NgModule({
  declarations: [
    AppComponent,
    PrepaidPlanComponent,
    AddPrepaidComponent,
    UpdatePrepaidComponent,
    AdminNavbarComponent,
    AddAddonComponent,
    UpdateAddonComponent,
<<<<<<< HEAD
    AddonComponent,
=======
    AddonPlanComponent,
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
    AddPostpaidComponent,
    UpdatePostpaidComponent,
    PostpaidPlanComponent,
    LoginComponent,
    RegisterComponent,
    AddonsComponent,
    NotificationComponent,
    PopularPlansComponent,
    RechargeDetailsComponent,
    ReviewComponent,
<<<<<<< HEAD
    UserNavbarComponent
=======
    UserNavbarComponent,
    ShowReviewComponent
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
