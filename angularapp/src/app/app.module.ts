import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrepaidPlanComponent } from './admin/prepaid/prepaid-plan/prepaid-plan.component';
import { AddPrepaidComponent } from './admin/prepaid/add-prepaid/add-prepaid.component';
import { UpdatePrepaidComponent } from './admin/prepaid/update-prepaid/update-prepaid.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AddPostpaidComponent } from './admin/postpaid/add-postpaid/add-postpaid.component';
import { PostpaidPlanComponent } from './admin/postpaid/postpaid-plan/postpaid-plan.component';
import { UpdatePostpaidComponent } from './admin/postpaid/update-postpaid/update-postpaid.component';
import { SearchPipe } from './services/search.pipe';
import { AddonsComponent } from './user/addons/addons.component';
import { PopularPlansComponent } from './user/popular-plans/popular-plans.component';


@NgModule({
  declarations: [
    AppComponent,
    PrepaidPlanComponent,
    AddPrepaidComponent,
    UpdatePrepaidComponent,
    AdminNavbarComponent,
    AddPostpaidComponent,
    PostpaidPlanComponent,
    UpdatePostpaidComponent,
    SearchPipe,
    AddonsComponent,
    PopularPlansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
