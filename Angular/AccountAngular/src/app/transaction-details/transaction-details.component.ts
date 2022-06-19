import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransactionDetails } from '../models/TransactionDetails';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {


  id: number;
  constructor(private route: ActivatedRoute) { }

  getTransation(id: number): TransactionDetails {

    console.log(id);
    this.transactionDetails.transactionId=id;
    this.transactionDetails.transactionFromAccount = "123";
    this.transactionDetails.transactionName = "ABC";
    this.transactionDetails.transactionToAccount = "234";
    this.transactionDetails.transaction_date = "345";
    this.transactionDetails.transaction_intitiator = "567";
    return this.transactionDetails;

  }
  ngOnInit(): void {
// getting query params

    this.route.params.subscribe((params: Params) =>
      this.id = +params['id']
    );


    // mocking DB call to get the transaction details based on the id
    let transactionObs = of(this.getTransation(this.id))
    transactionObs.pipe(
      map((data: TransactionDetails) => {
        data.fetchedFromDB = true;
        console.log(data);
        return data;
        
      })
    ).subscribe(data => {
      console.log(data),
      error=>console.log("ërror"),
      ()=> console.log("complete");

    })



  }


  transactionDetails = new TransactionDetails();




}

