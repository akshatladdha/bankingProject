import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_URL } from 'src/app.constants';
import { Transaction } from '../send-money/send-money.component';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(public http: HttpClient) { }

  transferMoney(transaction : Transaction) {
    return this.http.post<boolean>(`${APP_URL}/transferMoney`, transaction);
  }
}
