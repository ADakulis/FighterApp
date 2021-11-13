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
  list : FighterDetail[];

  postFighterDetail(){
    return this.http.post(this.baseURL, this.formData);
  }

  putFighterDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  refreshList(){
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as FighterDetail[]);
  }

}
