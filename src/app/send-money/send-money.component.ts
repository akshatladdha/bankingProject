import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AllCustomersService } from '../service/all-customers.service';
import { TransactionService } from '../service/transaction.service';
import { Customer } from '../view-all-customers/view-all-customers.component';

export class Transaction {
  constructor(
  public transactionId : number,
	public customerID : number,
	public toCustomerId : number,
	public amount : number) {}

  public getTransactionId() : number {
    return this.transactionId;
  }

  public getCustomerId() : number {
    return this.customerID;
  }

  public getToCustomerId() : number {
    return this.toCustomerId;
  }

  public getAmount() : number {
    return this.amount;
  }
}

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit {

  public fromCustId : number = 0;
  public toCustId : number = 0;
  public fromCustName : string = '';
  public toCustName : string = '';
  public amount : number = 0;
  public str : string = '';
  public details : Customer = new Customer(0, '', '', '', 0);
  public check : Boolean = false;

  constructor(public transactionService : TransactionService, public customerService : AllCustomersService, public router : Router ,public route : ActivatedRoute) {
    this.str = this.route.snapshot.params['str'];

    var x = this.str.split(" ");

    this.fromCustId = parseInt(x[0]);
    this.toCustId = parseInt(x[1]);

    this.customerService.executeFindCustomerById(this.fromCustId).subscribe(
      response => {
        this.details = response;
        this.fromCustName = this.details.name
      }
    );

    this.customerService.executeFindCustomerById(this.toCustId).subscribe(
      response => {
        this.details = response;
        this.toCustName = this.details.name;
      }
    );
  }

  ngOnInit(): void {
  }

  sendMoney() {
    var transaction : Transaction = new Transaction(0, this.fromCustId, this.toCustId, this.amount);
    // var x = this.transactionService.transferMoney(transaction);
    
    this.transactionService.transferMoney(transaction).subscribe(
      response => {
        this.check = response;
        
        if(this.check == true) {
          window.alert("Transaction Successfull \nRemaining amount : " + (this.details.currentBalance - this.amount));
          this.router.navigate(['viewAllCustomers']);
        }        

        else {
          window.alert("You don't have enough money to transfer");
        }
      }
    );
  }
}
