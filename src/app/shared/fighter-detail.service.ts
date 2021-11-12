import { Injectable } from '@angular/core';
import {FighterDetail} from "./fighter-detail.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FighterDetailService {

  constructor(private http:HttpClient) { }

  formData:FighterDetail = new FighterDetail();
  readonly baseURL = 'https://localhost:5001/api/fighters';

  postPaymentDetail(){
    return this.http.post(this.baseURL, this.formData);
  }

}
