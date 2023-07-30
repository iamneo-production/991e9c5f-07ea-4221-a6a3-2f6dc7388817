import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AddPrepaidComponent } from './admin/prepaid/add-prepaid/add-prepaid.component';
import { PrepaidPlanComponent } from './admin/prepaid/prepaid-plan/prepaid-plan.component';
import { UpdatePrepaidComponent } from './admin/prepaid/update-prepaid/update-prepaid.component';
import { AddPostpaidComponent } from './admin/postpaid/add-postpaid/add-postpaid.component';
import { PostpaidPlanComponent } from './admin/postpaid/postpaid-plan/postpaid-plan.component';
import { UpdatePostpaidComponent } from './admin/postpaid/update-postpaid/update-postpaid.component';
import { AddonsComponent } from './user/addons/addons.component';
import { NotificationComponent } from './user/notification/notification.component';
import { PopularPlansComponent } from './user/popular-plans/popular-plans.component';
import { RechargeDetailsComponent } from './user/recharge-details/recharge-details.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { AuthGuard } from './auth/auth.guard';
import { ShowReviewComponent } from './user/review/show-review/show-review.component';
import { ReviewComponent } from './user/review/review.component';
import { AddAddonComponent } from './admin/addon/add-addon/add-addon.component';
import { AddonPlanComponent } from './admin/addon/addon-plan/addon-plan.component';
import { UpdateAddonComponent } from './admin/addon/update-addon/update-addon.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signup', component: RegisterComponent},
  {
    path: "admin", component: AdminNavbarComponent,
    children: [
      { path: '', redirectTo: 'prepaid', pathMatch: 'full' },
      { path: 'prepaid', component: PrepaidPlanComponent },
      { path: 'addPrepaid', component: AddPrepaidComponent },
      { path: 'editPrepaid/:id', component: UpdatePrepaidComponent },
      { path: 'postpaid', component: PostpaidPlanComponent },
      { path: 'addPostpaid', component: AddPostpaidComponent },
      { path: 'editPostpaid/:id', component: UpdatePostpaidComponent },
      { path: 'addons', component: AddonPlanComponent },
      { path: 'addAddon', component: AddAddonComponent },
      { path: 'editAddon/:id', component: UpdateAddonComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    
    path: "user", component: UserNavbarComponent,
    children: [
      { path: '', redirectTo: 'popularPlans', pathMatch: 'full' },
      { path: "popularPlans", component: PopularPlansComponent },
      { path: "addons", component: AddonsComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'reviews', component: ShowReviewComponent },
      { path: "addRecharge", component: RechargeDetailsComponent },
      { path: "viewRecharge", component: NotificationComponent },
      {path: "addReview", component: ReviewComponent}
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
