import { Component } from '@angular/core';
import { Course, Module } from '../../models/card-health-training.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoProjectComponent } from '../dialog-info-project/dialog-info-project.component';

@Component({
  selector: 'app-card-health-training',
  templateUrl: './card-health-training.component.html',
  styleUrls: ['./card-health-training.component.scss'],
})
export class CardHealthTrainingComponent {
  constructor(private dialog: MatDialog) {}

  coursesTypeSelected = 'profesional';

  titleCoursesType = 'Formación Profesional';
  backgroundColorCoursesType = '#2755A2';
  btnCoursesTypeSelectedActive = false;
  activeCoursesCards = false;

  courses: Course[] = [
    {
      id: 1,
      name: 'Administración de Medicamentos',
      image: '../../../assets/images/C_Administracion de medicamentos.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 2,
      name: 'Atención a Pacientes con Enfermedades Mentales',
      image:
        '../../../assets/images/C_Atencion a Pacientes con Enferedades Mentales.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 3,
      name: 'Asesoria PRE y POST',
      image: '../../../assets/images/C_Asesoria PRE y POST.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 4,
      name: 'Atención a Victimas de Violencia Sexual',
      image:
        '../../../assets/images/C_Atencion a Victimas de Violencia Sexual.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 5,
      name: '',
      image: '../../../assets/images/Curso1.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 6,
      name: '',
      image: '../../../assets/images/Curso1.svg',
      course_type: 'social',
      substantive_function: 'Proyección Social',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 7,
      name: '',
      image: '../../../assets/images/Curso1.svg',
      course_type: 'social',
      substantive_function: 'Proyección Social',
      hours_num: 40,
      value: 20000,
    },
  ];

  modules: Module[] = [
    {
      id: 1,
      id_course: 1,
      name: 'Primer modulo',
      urls_video: [
        'https://www.youtube.com/embed/Z5MoBm99w1Q',
        'https://www.youtube.com/embed/fOkuDuABAVI',
      ],
      url_infograph:
        'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg',
      url_pdf: '../../../assets/docs/Programa de voluntarios.pdf',
    },
    {
      id: 2,
      id_course: 1,
      name: 'Segundo modulo',
      urls_video: [
        'https://www.youtube.com/embed/Z5MoBm99w1Q',
        'https://www.youtube.com/embed/fOkuDuABAVI',
      ],
      url_infograph:
        'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg',
      url_pdf: '../../../assets/docs/Programa de voluntarios.pdf',
    },
    {
      id: 3,
      id_course: 1,
      name: 'Tercer modulo',
      urls_video: [
        'https://www.youtube.com/embed/Z5MoBm99w1Q'
      ],
      url_infograph:
        'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg',
      url_pdf: '../../../assets/docs/Programa de voluntarios.pdf',
    },
    {
      id: 4,
      id_course: 1,
      name: 'Cuarto modulo',
      urls_video: [
        'https://www.youtube.com/embed/Z5MoBm99w1Q'
      ],
      url_infograph:
        'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg',
      url_pdf: '../../../assets/docs/Programa de voluntarios.pdf',
    },
  ];

  currentCourse: Course = {
    id: 0,
    name: '',
    image: '',
    course_type: '',
    substantive_function: '',
    hours_num: 0,
    value: 0,
  };

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

  getModuleNamesList(course_id: number){
    let modulesName: string[] = [];
    for (let i = 0; i < this.modules.length; i++) {
      if(this.modules[i].id_course === course_id){
        modulesName.push(this.modules[i].name);
      }
    }
    return modulesName;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogInfoProjectComponent, {
      data: {
        type: 'course',
        course: this.currentCourse,
        modules: this.getModuleNamesList(this.currentCourse.id)
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  showMoreCourseInfo(course_id: number) {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id === course_id) {
        this.currentCourse = this.courses[i];
        this.openDialog();
      }
    }
  }
}
