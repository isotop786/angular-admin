import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './components/secure/secure.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';



@NgModule({
  declarations: [
    SecureComponent,
    NavbarComponent,
    MenuComponent,
    DashboardComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SecureComponent
  ]
})
export class SecureModule { }
