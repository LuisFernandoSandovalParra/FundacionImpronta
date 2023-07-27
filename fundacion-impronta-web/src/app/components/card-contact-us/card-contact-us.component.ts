import { Component } from '@angular/core';

@Component({
  selector: 'app-card-contact-us',
  templateUrl: './card-contact-us.component.html',
  styleUrls: ['./card-contact-us.component.scss']
})
export class CardContactUsComponent {
  name: string = "";
  phone: number = 0;
  email: string = "";
  message: string = "";



  sendEmail(){}
}
