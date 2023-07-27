import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-card-contact-us',
  templateUrl: './card-contact-us.component.html',
  styleUrls: ['./card-contact-us.component.scss'],
  providers: [DataService]
})
export class CardContactUsComponent {
  name: string = "";
  phone: string = "";
  email: string = "";
  message: string = "";

  constructor(private dataService: DataService){}

  sendEmail(){
    this.dataService.sendMessage(this.name, this.email, this.phone, this.message).subscribe(
      (data) => {
        console.log("Mensaje enviado exitosamente", data)
      }
    )
    this.name = "";
    this.phone = "";
    this.email = "";
    this.message = "";
  }
}
