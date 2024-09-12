import { Component } from '@angular/core';
import { Founder } from '../../models/card-about-us.model';

@Component({
  selector: 'app-card-about-us',
  templateUrl: './card-about-us.component.html',
  styleUrls: ['./card-about-us.component.scss'],
})
export class CardAboutUsComponent {
  id: string = '';
  name: string = '';
  photo: string = '../../../assets/svg/user-default-icon.svg';
  description: string = '';

  activeTricycleInfo: boolean = false;
  textBtnReadMore: string = 'Ver mas';

  activeCardPersonalInfo: boolean = false;
  founders: Founder[] = [
    {
      id: 'f1',
      name: 'Ángela Yohana Molina',
      photo: '../../../assets/images/Angela1.jpg',
      description:
        'Administradora y contadora con mas de 10 años de experiencia en el area.',
    },
    {
      id: 'f2',
      name: 'Laura Natalia Ostos',
      photo: '../../../assets/images/Laura1.jpg',
      description:
        'Psicóloga del área clínica, con habilidades en intervenciones desde un enfoque cognitivo-conductual, así mismo, cuenta con destrezas en intervenciones a usuarios de diversas edades (primera infancia, infancia, adulto y adulto mayor). Muestra habilidades investigativas, así como, evaluativas e interventivas. Es gestora de programas y proyectos, sobresaliendo aquellos enfocados en la salud  física y mental.',
    },
    {
      id: 'f3',
      name: 'Néstor Ricardo Ávila',
      photo: '../../../assets/images/Doc1.jpg',
      description:
        'Psicólogo, Especialista y Magister en psicología Jurídica. Docente Universitario, Investigador Junior (MINCIENCIAS), Perito en procesos civiles y Penales, experto en el diseño de programas de reparación a victimas basados en mecanismos alternativos de justicia. ',
    },
    {
      id: 'f4',
      name: 'Cesar Augusto Niño',
      photo: '../../../assets/images/Cesar1.jpg',
      description:
        'Ingeniero Especialista en Gerencia de la Calidad, Finanzas, Seguridad y Salud en el Trabajo e Ingeniería Ambiental. Master en Calidad y Gestión Integral USTA - ICONTEC. Consultor en Gestión empresarial y desarrollo organizacional.',
    },
    
  ];

  constructor() {}

  toogleTricycleInfo() {
    this.activeTricycleInfo = !this.activeTricycleInfo;
    if (this.activeTricycleInfo) {
      this.textBtnReadMore = 'Ver menos';
    } else {
      this.textBtnReadMore = 'Ver mas';
    }
  }

  toogleNamePerson(id: string) {
    this.toogleCardPerson();
    for (let i = 0; i < this.founders.length; i++) {
      if (this.founders[i].id === id) {
        this.id = this.founders[i].id;
        this.name = this.founders[i].name;
        this.photo = this.founders[i].photo;
        this.description = this.founders[i].description;
      }
    }
  }

  toogleCardPerson() {
    this.activeCardPersonalInfo = !this.activeCardPersonalInfo;
  }
}
