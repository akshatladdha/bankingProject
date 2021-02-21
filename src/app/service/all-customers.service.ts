import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_URL } from 'src/app.constants';
import { Customer } from '../view-all-customers/view-all-customers.component';

@Injectable({
  providedIn: 'root'
})
export class AllCustomersService {

  constructor(public http : HttpClient) { }

  executeFindAllCustomers() {
    return this.http.get<Customer[]>(`${APP_URL}/findAllCustomers`);
  }

  executeFindCustomerById(custID : number) {
    return this.http.get<Customer>(`${APP_URL}/findCustomer/${custID}`);
  }
}
