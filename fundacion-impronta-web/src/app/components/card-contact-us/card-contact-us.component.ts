import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'environment';

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

  currency: string = 'COP';
  amountInCents: string = '';
  reference: string = '';
  integrity: string = '';
  publicKey = environment.publicKey;
  email: string = '';
  fullName: string = '';
  phoneNumber: string = '';
  documentType: string = '';
  documentNum: string = '';

  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) {}

  validateForm(form: any) {
    if (form.valid) {
      this.sendEmail();
    } else {
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
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['green-snackbar'],
      });
    } else {
      this.snackBar.open('Ocurrío un error al enviar el mensaje', 'Cerrar', {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['red-snackbar'],
      });
    }
  }

  formatCentCop(amount: string) {
    const cantidadNumerica = amount.replace(/[^0-9.]/g, '');
    const cantidadCentavosCOP = parseFloat(cantidadNumerica) * 100;
    return cantidadCentavosCOP.toString();
  }

  getIntegrityFirm() {
    this.amountInCents = this.formatCentCop(this.amountInCents);
    this.dataService.getIntegrity(this.amountInCents).subscribe((data) => {
      this.reference = data.reference;
      this.integrity = data.result;
      const url = 'https://checkout.wompi.co/p/';
      const queryParams = `?public-key=${this.publicKey}&currency=${this.currency}&amount-in-cents=${this.amountInCents}&reference=${this.reference}&signature:integrity=${this.integrity}&customer-data:email=${this.email}&customer-data:full-name=${this.fullName}&customer-data:phone-number=${this.phoneNumber}&customer-data:legal-id=${this.documentNum}&customer-data:legal-id-type=${this.documentType}`;
      window.open(url + queryParams, '_blank');
    });
  }
}
