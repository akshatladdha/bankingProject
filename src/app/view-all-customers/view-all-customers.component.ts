import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AllCustomersService } from '../service/all-customers.service';

export class Customer {
  constructor(
    public custId: number,
    public name: string,
    public email: string,
    public phoneNumber: string,
    public currentBalance: number) { }

    public getCustId() : number {
      return this.custId;
    }

    public getName() : string {
      return this.name;
    }

    public getEmail() : string {
      return this.email;
    }

    public getPhoneNumber() : string {
      return this.phoneNumber;
    }

    public getCurrentBalance() : number {
      return this.currentBalance;
    }
}


@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})

export class ViewAllCustomersComponent implements OnInit {

  details: Customer[] = [];
  dtOptions : DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(public service : AllCustomersService, public router : Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType : "full_numbers",
      lengthMenu : [5, 10, 15, 20]
    };

    this.service.executeFindAllCustomers().subscribe(
      response => {
        this.details = response;
        this.dtTrigger.next();
      }
    );
  }

  findCustomerById(custId: number) {
    this.router.navigate(['viewCustomer', custId]);
  }

  // ngOnDestroy() {
  //   this.dtTrigger.unsubscribe();
  // }
}
