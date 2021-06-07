import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransferHistoryListComponent } from '../transfers/transfer-history-list/transfer-history-list.component';
import { Login } from './login';
import { User } from './User';
import { Username } from './Username';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  exists():Observable<Username>{
    return this.http.get<Username>('https://localhost:5001/api/user/exists');
  }
  
  login(login: Login): Observable<User> {
    return this.http.post<User>('https://localhost:5001/api/user/login', login);
  }


}


