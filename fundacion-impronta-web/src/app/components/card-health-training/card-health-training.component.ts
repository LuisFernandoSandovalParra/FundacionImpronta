import { Component } from '@angular/core';
import { Course } from '../../models/card-health-training.model';

@Component({
  selector: 'app-card-health-training',
  templateUrl: './card-health-training.component.html',
  styleUrls: ['./card-health-training.component.scss'],
})
export class CardHealthTrainingComponent {
  coursesTypeSelected = 'profesional';

  titleCoursesType = 'Formación Profesional';
  backgroundColorCoursesType = '#2755A2'
  btnCoursesTypeSelectedActive = false;
  activeCoursesCards = false;

  courses: Course[] = [
    {
      image: '../../../assets/images/C_Administracion de medicamentos.svg',
      course_type: 'profesional',
    },
    {
      image:
        '../../../assets/images/C_Atencion a Pacientes con Enferedades Mentales.svg',
      course_type: 'profesional',
    },
    {
      image: '../../../assets/images/C_Asesoria PRE y POST.svg',
      course_type: 'profesional',
    },
    {
      image:
        '../../../assets/images/C_Atencion a Victimas de Violencia Sexual.svg',
      course_type: 'profesional',
    },
    { image: '../../../assets/images/Curso1.svg', course_type: 'profesional' },
    { image: '../../../assets/images/Curso1.svg', course_type: 'social' },
    { image: '../../../assets/images/Curso1.svg', course_type: 'social' },
  ];

  changeCoursesTypeSelected(courses_type: string) {
    switch (courses_type) {
      case 'profesional':
        this.coursesTypeSelected = 'profesional';
        this.titleCoursesType = 'Formación Profesional';
        this.backgroundColorCoursesType = '#2755A2';
        this.btnCoursesTypeSelectedActive = false;
        this.activeCoursesCards = false;
        break;
      case 'social':
        this.coursesTypeSelected = 'social';
        this.titleCoursesType = 'Proyección Social';
        this.backgroundColorCoursesType = '#47B8A4';
        this.btnCoursesTypeSelectedActive = true;
        this.activeCoursesCards = true;
        break;
      default:
        break;
    }
  }

  getListCourses(type: string): Course[] {
    let courses: Course[] = [];
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].course_type === type) {
        courses.push(this.courses[i]);
      }
    }
    return courses;
  }
}
