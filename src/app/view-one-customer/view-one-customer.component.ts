import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllCustomersService } from '../service/all-customers.service';
import { Customer } from '../view-all-customers/view-all-customers.component';

@Component({
  selector: 'app-view-one-customer',
  templateUrl: './view-one-customer.component.html',
  styleUrls: ['./view-one-customer.component.css']
})
export class ViewOneCustomerComponent implements OnInit {

  public custId: number = 0;
  public customer: Customer = new Customer(0, '', '', '', 0);

  constructor(public service: AllCustomersService, public router: Router, public route: ActivatedRoute) {
    this.custId = this.route.snapshot.params['custId'];

    this.service.executeFindCustomerById(this.custId).subscribe(
      response => {
        this.customer = response;
      }
    );
  }

  ngOnInit(): void {
  }

  transferMoney(custId : number) {
    this.router.navigate(['transferAllCustomer', custId]);
  }
}
