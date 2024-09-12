import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-volunteers',
  templateUrl: './card-volunteers.component.html',
  styleUrls: ['./card-volunteers.component.scss'],
  providers: [DataService],
})
export class CardVolunteersComponent {
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  phone: number = 0;
  academic_level: string = '';
  habilities: string = '';
  work_hours: number = 0;
  modality: string = '';
  interest_population: string = '';

  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) {}

  sendVolunteerEmail() {
    this.dataService
      .sendVolunteerEmail(
        this.first_name,
        this.last_name,
        this.email,
        this.phone,
        this.academic_level,
        this.habilities,
        this.work_hours,
        this.modality,
        this.interest_population
      )
      .subscribe((data) => {
        this.openSnackBar(data.ok);
      });
    (this.first_name = ''),
      (this.last_name = ''),
      (this.email = ''),
      (this.phone = 0),
      (this.academic_level = ''),
      (this.habilities = ''),
      (this.work_hours = 0),
      (this.modality = ''),
      (this.interest_population = '');
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
}
