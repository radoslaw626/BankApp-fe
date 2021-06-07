import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Balance } from './balance';
import { BalanceService } from './balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
balance;
form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,
    private balanceService: BalanceService) { }

  ngOnInit(): void {
    this.balanceService.getBalance().subscribe(balance =>{
      this.balance = balance;
  });

  }
}
