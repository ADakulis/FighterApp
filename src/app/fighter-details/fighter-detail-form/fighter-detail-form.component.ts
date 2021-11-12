import { Component, OnInit } from '@angular/core';
import {FighterDetailService} from "../../shared/fighter-detail.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-fighter-detail-form',
  templateUrl: './fighter-detail-form.component.html',
  styleUrls: ['./fighter-detail-form.component.css']
})
export class FighterDetailFormComponent implements OnInit {

  constructor(public service:FighterDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res=>{

      },
      err=>{console.log(err);}
    );
  }

}
