import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure/components/secure/secure.component';
import { LoginComponent } from './public/components/login/login.component';
import { RegisterComponent } from './public/components/register/register.component';
import { DashboardComponent } from './secure/components/dashboard/dashboard.component';
import { OrderComponent } from './secure/components/order/order.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  {
    path:'',
    component:  SecureComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'orders',
        component: OrderComponent
      },
    ]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  { path: '**', component: PageNotFoundComponentComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
