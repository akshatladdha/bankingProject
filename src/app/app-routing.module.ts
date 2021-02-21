import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { TransferViewAllCustomersComponent } from './transfer-view-all-customers/transfer-view-all-customers.component';
import { ViewAllCustomersComponent } from './view-all-customers/view-all-customers.component';
import { ViewOneCustomerComponent } from './view-one-customer/view-one-customer.component';

const routes: Routes = [
  { path : '', component: BlankComponent},
  { path : 'viewAllCustomers', component: ViewAllCustomersComponent},
  { path : 'viewCustomer/:custId', component: ViewOneCustomerComponent},
  { path : 'transferAllCustomer/:custId', component: TransferViewAllCustomersComponent},
  { path : 'sendMoney/:str', component : SendMoneyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
