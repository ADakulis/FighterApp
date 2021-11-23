import { Component, OnInit } from '@angular/core';
import {FighterDetailService} from "../../shared/fighter-detail.service";
import {NgForm} from "@angular/forms";
import {FighterDetail} from "../../shared/fighter-detail.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-fighter-edit-form',
  templateUrl: './fighter-edit-form.component.html',
  styleUrls: ['./fighter-edit-form.component.css']
})
export class FighterEditFormComponent implements OnInit {

  currentId: string;
  private routeSub: Subscription;
  constructor(public service:FighterDetailService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
    });
  }

  onSubmit(form:NgForm){
      this.updateRecord(form);
      this.router.navigate(['/listOfFighters']);
  }


  updateRecord(form:NgForm){
    this.service.putFighterDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        alert("Fighter updated!");

      },
      err=>{console.log(err);}
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new FighterDetail();

  }
/*
  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.FighterDetailService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
*/


}
