import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LbarComponent } from './lbar/lbar.component';
import { BlankComponent } from './blank/blank.component';
import { ViewAllCustomersComponent } from './view-all-customers/view-all-customers.component';
import { ViewOneCustomerComponent } from './view-one-customer/view-one-customer.component';
import { TransferViewAllCustomersComponent } from './transfer-view-all-customers/transfer-view-all-customers.component';
import { SendMoneyComponent } from './send-money/send-money.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LbarComponent,
    BlankComponent,
    ViewAllCustomersComponent,
    ViewOneCustomerComponent,
    TransferViewAllCustomersComponent,
    SendMoneyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
