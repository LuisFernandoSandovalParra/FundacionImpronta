import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-contact-us',
  templateUrl: './card-contact-us.component.html',
  styleUrls: ['./card-contact-us.component.scss'],
  providers: [DataService],
})
export class CardContactUsComponent {
  name: string = '';
  phone: string = '';
  emailUser: string = '';
  message: string = '';

  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) {}

  validateForm(form: any){
    if(form.valid){
      this.sendEmail();
    }else{
      this.openSnackBar(false);
    }
  }

  sendEmail() {
    this.dataService
      .sendMessage(this.name, this.emailUser, this.phone, this.message)
      .subscribe((data) => {
        this.openSnackBar(data.ok);
      });
    this.name = '';
    this.phone = '';
    this.emailUser = '';
    this.message = '';
  }

  openSnackBar(state: boolean) {
    if (state === true) {
      this.snackBar.open('Mensaje enviado exitosamente', 'Cerrar', {
        duration: 5000,
        horizontalPosition:'end',
        verticalPosition: 'top',
        panelClass: ['green-snackbar'],
      });
    } else {
      this.snackBar.open('Ocurrío un error al enviar el mensaje', 'Cerrar', {
        duration: 5000,
        horizontalPosition:'end',
        verticalPosition: 'top',
        panelClass: ['red-snackbar'],
      });
    }
  }
}
