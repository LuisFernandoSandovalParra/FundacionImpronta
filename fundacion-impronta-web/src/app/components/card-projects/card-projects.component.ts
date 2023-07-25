import { Component } from '@angular/core';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.scss'],
})
export class CardProjectsComponent {
  activeTricycleInfo: boolean = false;
  textBtnReadMore: string = 'Ver mas';


  toogleTricycleInfo() {
    this.activeTricycleInfo = !this.activeTricycleInfo;
    if (this.activeTricycleInfo) {
      this.textBtnReadMore = 'Ver menos';
    } else {
      this.textBtnReadMore = 'Ver mas';
    }
  }
}
