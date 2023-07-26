import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AddPrepaidComponent } from './admin/prepaid/add-prepaid/add-prepaid.component';
import { PrepaidPlanComponent } from './admin/prepaid/prepaid-plan/prepaid-plan.component';
import { UpdatePrepaidComponent } from './admin/prepaid/update-prepaid/update-prepaid.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: AdminNavbarComponent },
  {
    path: 'admin', component: AdminNavbarComponent,
    children: [
      { path: '', redirectTo: 'prepaid', pathMatch: 'full' },
      { path: 'prepaid', component: PrepaidPlanComponent },
      { path: 'addPrepaid', component: AddPrepaidComponent },
      { path: 'editPrepaid/:id', component: UpdatePrepaidComponent },
    ],
    // canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
