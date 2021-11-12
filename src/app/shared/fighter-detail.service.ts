import { Injectable } from '@angular/core';
import {FighterDetail} from "./fighter-detail.model";

@Injectable({
  providedIn: 'root'
})
export class FighterDetailService {

  constructor() { }
  formData:FighterDetail = new FighterDetail();
}
