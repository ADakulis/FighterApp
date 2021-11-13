import { Component, OnInit } from '@angular/core';
import {FighterDetailService} from "../shared/fighter-detail.service";
import {FighterDetail} from "../shared/fighter-detail.model";

@Component({
  selector: 'app-fighter-details',
  templateUrl: './fighter-details.component.html',
  styleUrls: ['./fighter-details.component.css']
})
export class FighterDetailsComponent implements OnInit {

  constructor(public service: FighterDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selecedRecord:FighterDetail){
    this.service.formData = Object.assign({},selecedRecord);
  }

}
