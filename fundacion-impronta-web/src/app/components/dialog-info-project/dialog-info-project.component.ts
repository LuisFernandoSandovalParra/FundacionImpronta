import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'environment';
import { DataSharingService } from 'src/app/data-sharing.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-dialog-info-project',
  templateUrl: './dialog-info-project.component.html',
  styleUrls: ['./dialog-info-project.component.scss'],
})
export class DialogInfoProjectComponent {
  payForm: FormGroup;
  private emailPattern: any =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private textPattern: any = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
  private placePattern: any = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s()]*$/;
  private numberPattern: any = /^-?[0-9]\d*$/;

  constructor(
    private dataSharingService: DataSharingService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogInfoProjectComponent>,
    private sanitizer: DomSanitizer,
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.payForm = this.createFormGroup();
  }

  subscriptionActiveForm: boolean = false;

  currency: string = 'COP';
  amountInCents: string = '';
  reference: string = '';
  integrity: string = '';
  publicKey = environment.publicKey;
  redirectLink: string = 'http:localhost:4200/inicio';

  minAgeValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value) {
        const selectedDate = new Date(this.payForm.value.birthdate);
        const today = new Date();
        const age = today.getFullYear() - selectedDate.getFullYear();

        if (age < minAge) {
          return { minimunAge: true };
        }
      }

      return null;
    };
  }

  get firstName() {
    return this.payForm.get('firstName');
  }

  get lastName() {
    return this.payForm.get('lastName');
  }

  get documentNum() {
    return this.payForm.get('documentNum');
  }

  get identificationExpeditionPlace() {
    return this.payForm.get('identificationExpeditionPlace');
  }

  get birthdate() {
    return this.payForm.get('birthdate');
  }

  get email() {
    return this.payForm.get('email');
  }

  get phoneNumber() {
    return this.payForm.get('phoneNumber');
  }

  get academicLevel(){
    return this.payForm.get('academicLevel')
  }

  get profession() {
    return this.payForm.get('profession');
  }

  createFormGroup() {
    return new FormGroup({
      currency: new FormControl(''),
      amountInCents: new FormControl(''),
      reference: new FormControl(''),
      integrity: new FormControl(''),
      publicKey: new FormControl(''),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(this.textPattern),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(this.textPattern),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(this.numberPattern),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      documentType: new FormControl(''),
      documentNum: new FormControl('', [
        Validators.required,
        Validators.pattern(this.numberPattern),
        Validators.minLength(9),
      ]),
      identificationExpeditionPlace: new FormControl('', [
        Validators.required,
        Validators.pattern(this.placePattern),
      ]),
      birthdate: new FormControl('', [
        Validators.required,
        this.minAgeValidator(18),
      ]),
      redirectLink: new FormControl(''),
      academicLevel: new FormControl('', [Validators.required]),
      profession: new FormControl('', [
        Validators.required,
        Validators.pattern(this.textPattern),
      ]),
    });
  }

  getCurrentVideoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.data.project.video
    );
  }

  closeDialog() {
    this.dialogRef.close();
  }

  sendData() {
    this.dataSharingService.updateSelectData(this.data.project.title);
    this.closeDialog();
  }

  viewForm() {
    this.subscriptionActiveForm = !this.subscriptionActiveForm;
    console.log(this.subscriptionActiveForm);
  }

  formatCentCop(amount: string) {
    const cantidadNumerica = amount.replace(/[^0-9.]/g, '');
    const cantidadCentavosCOP = parseFloat(cantidadNumerica) * 100;
    return cantidadCentavosCOP.toString();
  }

  getIntegrityFirm() {
    this.amountInCents = this.formatCentCop(this.data.course.value.toString());
    this.dataService.getIntegrity(this.amountInCents).subscribe((data) => {
      this.reference = data.reference;
      this.integrity = data.result;
      const url = 'https://checkout.wompi.co/p/';
      const queryParams = `?public-key=${this.publicKey}&currency=${
        this.currency
      }&amount-in-cents=${this.amountInCents}&reference=${
        this.reference
      }&signature:integrity=${this.integrity}&redirect-url=${
        this.redirectLink
      }&customer-data:email=${
        this.payForm.value.email
      }&customer-data:full-name=${
        this.payForm.value.firstName + ' ' + this.payForm.value.lastName
      }&customer-data:phone-number=${
        this.payForm.value.phoneNumber
      }&customer-data:legal-id=${
        this.payForm.value.documentNum
      }&customer-data:legal-id-type=${this.payForm.value.documentType}`;
      //window.location.href = url + queryParams;
      window.open(url + queryParams, '_blank');
    });
  }

  onResetForm() {
    this.payForm.reset();
  }

  onSubmit() {
    if (this.payForm.valid) {
      this.getIntegrityFirm();
    } else {
      console.log('No valido');
    }
  }
}
