import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { create } from 'domain';
import { Observable } from 'rxjs';

const  baseUrl="http://localhost:8080/api/"
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient : HttpClient) {}

    create(data) : Observable<any>{
      return this.httpClient.post(baseUrl + "/"+"/createAccTran",data);

    }
   
}
