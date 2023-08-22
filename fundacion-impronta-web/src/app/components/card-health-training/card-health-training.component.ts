import { Component, OnInit } from '@angular/core';
import { Course, Module } from '../../models/card-health-training.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoProjectComponent } from '../dialog-info-project/dialog-info-project.component';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-card-health-training',
  templateUrl: './card-health-training.component.html',
  styleUrls: ['./card-health-training.component.scss'],
})
export class CardHealthTrainingComponent implements OnInit{
  constructor(private dialog: MatDialog, private dataService: DataService) {}

  coursesTypeSelected = 'profesional';

  titleCoursesType = 'Formación Profesional';
  backgroundColorCoursesType = '#2755A2';
  btnCoursesTypeSelectedActive = false;
  activeCoursesCards = false;

  courses: Course[] = [

    /*
    {
      id: 1,
      name: 'Atención a Victimas de Violencia Sexual',
      image:
        '../../../assets/images/C_Atencion a victimas de violencia sexual.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 2,
      name: 'Atención a Victimas de Violencia con Agentes Químicos',
      image:
        '../../../assets/images/C_Atencion a victimas de Violencia con Agentes Quimicos.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 3,
      name: 'Atención Integral al Consumidor de Sustancias Psicoactivas',
      image:
        '../../../assets/images/C_Atención Integral al Consumidor de Sustancias Psicoactivas.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 4,
      name: 'Cuidados Paleativos y Manejo del Dolor',
      image:
        '../../../assets/images/C_Cuidados Paleativos y Manejo del Dolor.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 5,
      name: 'Duelo Gestacional y Perinatala',
      image: '../../../assets/images/C_Duelo Gestacional y Perinatala.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 6,
      name: 'Entrenamiento en Habilidades Sociales',
      image: '../../../assets/images/',
      course_type: 'social',
      substantive_function: 'Proyección Social',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 7,
      name: 'Gestionando Mi Duelo',
      image: '../../../assets/images/',
      course_type: 'social',
      substantive_function: 'Proyección Social',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 8,
      name: 'Gestión del Duelo',
      image: '../../../assets/images/C_Gestion del Duelo.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 9,
      name: 'Inclusión Social para las Personas con Necesidades Educativas Diferenciadas',
      image:
        '../../../assets/images/C_Inclusión Social para las Personas con Necesidades Educativas Diferenciadas.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 10,
      name: 'Atención Diferencial para la Población LGBT',
      image: '../../../assets/images/',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 11,
      name: 'Instituciones Amigas de la Mujer y la Infancia',
      image:
        '../../../assets/images/C_Instituciones Amigas de la Mujer y la Infancia.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 12,
      name: 'Humanización en el Servicio de Salud',
      image:
        '../../../assets/images/C_Humanización en el Servicio de Salud.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 13,
      name: 'Plan de Cuidados en Salud Mental',
      image: '../../../assets/images/',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 14,
      name: 'Primeros Auxilios Emocionales',
      image: '../../../assets/images/C_Primeros Auxilios Emocionales.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 15,
      name: 'Seguridad y Salud en el Trabajo',
      image: '../../../assets/images/C_Seguridad y Salud en el Trabajo.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    {
      id: 16,
      name: 'Manejo de Residuos Solidos y Peligrosos Hospitalarios',
      image:
        '../../../assets/images/C_Manejo de Residuos Solidos y Peligrosos Hospitalarios.svg',
      course_type: 'profesional',
      substantive_function: 'Formación Profesional',
      hours_num: 40,
      value: 20000,
    },
    */
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
      urls_video: ['https://www.youtube.com/embed/Z5MoBm99w1Q'],
      url_infograph:
        'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg',
      url_pdf: '../../../assets/docs/Programa de voluntarios.pdf',
    },
    {
      id: 4,
      id_course: 1,
      name: 'Cuarto modulo',
      urls_video: ['https://www.youtube.com/embed/Z5MoBm99w1Q'],
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

  ngOnInit(): void {
    this.dataService.getCoursesList().subscribe(data => {
      for (let i = 0; i < data.info.length; i++) {
        this.currentCourse = {
          id: data.info[i].course_id,
          image: data.info[i].url_image,
          name: data.info[i].name,
          course_type: data.info[i].course_type,
          substantive_function: data.info[i].substantive_function,
          hours_num: data.info[i].hours_number,
          value: data.info[i].value
        }
        this.courses.push(this.currentCourse);
      }
    })
  }

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

  getModuleNamesList(course_id: number) {
    let modulesName: string[] = [];
    for (let i = 0; i < this.modules.length; i++) {
      if (this.modules[i].id_course === course_id) {
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
        modules: this.getModuleNamesList(this.currentCourse.id),
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
