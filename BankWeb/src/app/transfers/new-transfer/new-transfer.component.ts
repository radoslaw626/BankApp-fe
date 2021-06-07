import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css']
})
export class NewTransferComponent implements OnInit {
  form: FormGroup;
  senderName:string;

  constructor(private fb: FormBuilder, private router: Router,
    private transferService: TransferService) { }

  ngOnInit(): void {
    this.transferService.exists().subscribe(x => {
    this.form=this.fb.group({
      amount:'',
      receiver_id:'',
      currency:'PLN',
      sender_full_name:x.login,
      sender_id:x.id,
      receiver_full_name:''
      
    });
  });
  }


  onSubmit(value){
    if (value.amount !=='' && value.receiver_id !==''){
      this.transferService.newTransfer(value).subscribe(()=>{
            this.router.navigate(['/']);
      })
    }
    console.log('Podaj nr odbiorcy oraz kwotę.');
  }

}
