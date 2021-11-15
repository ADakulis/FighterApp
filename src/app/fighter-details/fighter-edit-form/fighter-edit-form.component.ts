import { Component, OnInit } from '@angular/core';
import {FighterDetailService} from "../../shared/fighter-detail.service";
import {NgForm} from "@angular/forms";
import {FighterDetail} from "../../shared/fighter-detail.model";

@Component({
  selector: 'app-fighter-edit-form',
  templateUrl: './fighter-edit-form.component.html',
  styleUrls: ['./fighter-edit-form.component.css']
})
export class FighterEditFormComponent implements OnInit {

  constructor(public service:FighterDetailService) { }

  ngOnInit(): void {
  }

}
