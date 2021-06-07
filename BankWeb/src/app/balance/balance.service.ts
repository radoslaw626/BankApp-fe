import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Balance } from './balance';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http: HttpClient) { }
  getBalance():Observable<Balance>{
    return this.http.get<Balance>('https://localhost:5001/account/balance')
  }
}
