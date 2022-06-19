import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/services/Account';
import { Transaction } from 'src/app/services/Transaction';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
accountNew= new Account();
transactionList : Transaction[] =[];

  constructor(private router : Router) { }

  i : number=0;
  ngOnInit(): void {
  }


  log(x){
    console.log(x.value)
  }

  addTransaction(transactionId, transaction_inti){
    
    let transNew  = new Transaction();
     transNew.transaction_date=transactionId.value;
     transNew.transaction_intitiator=transaction_inti.value;
     transNew.transactionId=transactionId.value
     console.log(transNew);
     this.transactionList.push(transNew);
     console.log("done");
    
  }


  addAccount(accountUser : Account){

    console.log(accountUser)
    this.accountNew.accountHolder=accountUser.accountHolder;
    this.accountNew.accountId=accountUser.accountId;
    this.accountNew.transaction=this.transactionList;
  }


  onSubmit(form :NgForm) {


    console.log(form.value)
this.addAccount(form.value);

}

getTransactionDetails(transaction){
  console.log(transaction.transactionId);
this.router.navigate (['/trandetails',1] );
}
  
}
