import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TransferItem } from '../transfer-item';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-transfer-history-list',
  templateUrl: './transfer-history-list.component.html',
  styleUrls: ['./transfer-history-list.component.css']
})
export class TransferHistoryListComponent implements OnInit {
transfers;
displayedColumns=['number', 'sender_id', 'sender_full_name', 'receiver_id', 'receiver_full_name', 'amount', 'currency', 'date'];

  constructor(private transferService: TransferService) { }

  ngOnInit(): void{
    this.transferService.getTransferHistory().subscribe(transfers =>{
      this.transfers = new MatTableDataSource(transfers);
    });
  }

  applyFilter(filterValue: string){
    this.transfers.filter=filterValue.trim().toLowerCase();
  }

}
