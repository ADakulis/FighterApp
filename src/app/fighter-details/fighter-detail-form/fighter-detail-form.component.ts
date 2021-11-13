import { Component, OnInit } from '@angular/core';
import {FighterDetailService} from "../../shared/fighter-detail.service";
import {NgForm} from "@angular/forms";
import {FighterDetail} from "../../shared/fighter-detail.model";

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
    if(this.service.formData.id == '')
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postFighterDetail().subscribe(
      res=>{
        this.service.refreshList();
        alert("Fighter added!");
        this.resetForm(form);
      },
      err=>{console.log(err);}
    );
  }

  updateRecord(form:NgForm){
    this.service.putFighterDetail().subscribe(
      res=>{
        this.service.refreshList();
        alert("Fighter updated!");
        this.resetForm(form);
      },
      err=>{console.log(err);}
    );
  }


  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new FighterDetail();

  }

}
