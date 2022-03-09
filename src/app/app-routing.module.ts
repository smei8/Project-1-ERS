import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import { ListAccountComponent } from './account/list-account/list-account.component';
import { ListRequestComponent } from './reimbursement/list-request/list-request.component';
import { EmployeeComponent } from './user/employee/employee.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';


const routes: Routes = [
  { path: 'account-list', component: ListAccountComponent },
  { path: 'request-list', component: ListRequestComponent },
  { path: 'account-edit/:id', component: EditAccountComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'employee-home', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
