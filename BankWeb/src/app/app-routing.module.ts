import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewTransferComponent } from './transfers/new-transfer/new-transfer.component';
import { RegisterComponent } from './register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TransferHistoryListComponent } from './transfers/transfer-history-list/transfer-history-list.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
     {
        path: '', component: SidenavComponent,
        children:[
          {path: '', component: DashboardComponent},
          {path: 'balance', component: BalanceComponent},
          {path: 'new-transfer', component: NewTransferComponent},
          {path: 'transfer-history', component: TransferHistoryListComponent}
        ]
      },
      {
        path:'login', component: LoginComponent
      },
      {
        path:'register', component: RegisterComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
