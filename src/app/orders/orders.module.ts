import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MyordersComponent } from '../myorders/myorders.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderRoutingModule } from './orders-routing.module';
import { ListOrdersComponent } from '../list-orders/list-orders.component';


@NgModule({
  declarations: [
    
    MyordersComponent,
    ListOrdersComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class OrderModule { }