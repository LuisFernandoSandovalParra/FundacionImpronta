import { Component, OnInit } from '@angular/core';
import { Course, Module } from '../../models/card-health-training.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoProjectComponent } from '../dialog-info-project/dialog-info-project.component';
import { DialogCountAccessComponent } from '../dialog-count-access/dialog-count-access.component';
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

  courses: Course[] = [];

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

  openUserAccessDialog(type: string){
    const dialogRef = this.dialog.open(DialogCountAccessComponent, {
      panelClass: 'dialog-size',
      data: {
        type: type
      }
    });
    dialogRef.afterClosed().subscribe((result) => {});
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
