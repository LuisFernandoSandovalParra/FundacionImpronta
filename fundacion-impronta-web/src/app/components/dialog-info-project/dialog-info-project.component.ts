import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-info-project',
  templateUrl: './dialog-info-project.component.html',
  styleUrls: ['./dialog-info-project.component.scss']
})
export class DialogInfoProjectComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef:MatDialogRef<DialogInfoProjectComponent>, private sanitizer: DomSanitizer) {}

  getCurrentVideoUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.project.video)
  }

  closeDialog(){
    this.dialogRef.close();
  }
}