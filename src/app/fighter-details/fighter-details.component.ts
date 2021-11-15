import { Component, OnInit } from '@angular/core';
import {FighterDetailService} from "../shared/fighter-detail.service";
import {FighterDetail} from "../shared/fighter-detail.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fighter-details',
  templateUrl: './fighter-details.component.html',
  styleUrls: ['./fighter-details.component.css']
})
export class FighterDetailsComponent implements OnInit {

  constructor(public service: FighterDetailService, private router: Router) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selecedRecord:FighterDetail){
    //this.service.formData = Object.assign({},selecedRecord);
    this.router.navigate(['/details']);
  }

  onDelete(id:string) {
    if (confirm('Are you sure to delete this fighter?')) {
      this.service.deleteFighterDetail(id).subscribe(
        res => {
          this.service.refreshList();
          alert("Fighter deleted!");
        },
        err => {
          console.log(err)
        }
      )
    }
  }
}
