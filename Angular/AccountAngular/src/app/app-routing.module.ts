import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
  {path : 'add' , component : AddAccountComponent},
  {path : 'trandetails' , component : TransactionDetailsComponent},
  {path : 'trandetails/:id' , component : TransactionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
