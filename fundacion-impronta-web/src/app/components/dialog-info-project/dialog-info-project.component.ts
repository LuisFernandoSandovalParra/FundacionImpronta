import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { DataSharingService } from 'src/app/data-sharing.service';

@Component({
  selector: 'app-dialog-info-project',
  templateUrl: './dialog-info-project.component.html',
  styleUrls: ['./dialog-info-project.component.scss']
})
export class DialogInfoProjectComponent {

  constructor(private dataSharingService: DataSharingService, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef:MatDialogRef<DialogInfoProjectComponent>, private sanitizer: DomSanitizer) {}

  subscriptionActiveForm: boolean = false;

  viewForm(){
    this.subscriptionActiveForm = !this.subscriptionActiveForm;
    console.log(this.subscriptionActiveForm)
  }

  getCurrentVideoUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.project.video)
  }

  closeDialog(){
    this.dialogRef.close();
  }

  sendData() {
    this.dataSharingService.updateSelectData(this.data.project.title);
    this.closeDialog();
  }
}
