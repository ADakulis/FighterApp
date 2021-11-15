import { Component, OnInit } from '@angular/core';
import {FighterDetailService} from "../shared/fighter-detail.service";
import {FighterDetailsComponent} from "../fighter-details/fighter-details.component";
import {FighterDetail} from "../shared/fighter-detail.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fighterWins: FighterDetail[];
  constructor(public service: FighterDetailService) {
    //this.fighterWins;
  }

  getTop(){

    let i:number=0;
    for(let fd of this.service.list){
      this.fighterWins[i].wins=fd.wins;
      this.fighterWins[i].nickname=fd.nickname;
      i++;
    }


  }



  ngOnInit(): void {
    this.service.refreshList();
    this.fighterWins;
    //this.getTop();
  }

}
