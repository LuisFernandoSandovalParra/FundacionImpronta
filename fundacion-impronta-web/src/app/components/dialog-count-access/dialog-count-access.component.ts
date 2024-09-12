import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'environment';
import { DataSharingService } from 'src/app/data-sharing.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-dialog-count-access',
  templateUrl: './dialog-count-access.component.html',
  styleUrls: ['./dialog-count-access.component.scss'],
})
export class DialogCountAccessComponent {
  constructor(
    private dataSharingService: DataSharingService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogCountAccessComponent>,
    private sanitizer: DomSanitizer,
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
