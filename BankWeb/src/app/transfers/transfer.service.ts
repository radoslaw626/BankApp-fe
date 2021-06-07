import { Injectable } from '@angular/core';
import { TransferItem } from './transfer-item';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Username } from './Username';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: HttpClient) { }

  getTransferHistory(): Observable<TransferItem[]>{
    return this.http.get<TransferItem[]>('https://localhost:5001/transfer')
  }
  newTransfer(newTransfer: TransferItem): Observable<any>{
    return this.http.post<any>('https://localhost:5001/transfer', newTransfer);
  }
  exists():Observable<Username>{
    return this.http.get<Username>('https://localhost:5001/api/user/exists');
  }
}
