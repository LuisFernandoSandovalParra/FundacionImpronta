import { Component } from '@angular/core';

@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.component.html',
  styleUrls: ['./cardinfo.component.scss']
})
export class CardinfoComponent {
  showMoreDescription: boolean = false
  urlShowMoreDescriptionBtn: string = "../../../assets/svg/more-icon.svg";

  toogleDescriptionBtn(){
    this.showMoreDescription = !this.showMoreDescription;
    if(this.showMoreDescription){
      this.urlShowMoreDescriptionBtn = "../../../assets/svg/rest-icon.svg"
    }else{
      this.urlShowMoreDescriptionBtn = "../../../assets/svg/more-icon.svg"
    }
  }
}
