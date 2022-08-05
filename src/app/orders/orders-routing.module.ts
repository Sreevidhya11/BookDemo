import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ListOrdersComponent } from '../list-orders/list-orders.component';
import { MyordersComponent } from '../myorders/myorders.component';
import { RoleGuard } from '../role.guard';

const routes: Routes = [
  {path:'myorders', component:MyordersComponent, canActivate:[AuthGuard]},  
  {path:'orders', component:ListOrdersComponent, canActivate:[AuthGuard, RoleGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }