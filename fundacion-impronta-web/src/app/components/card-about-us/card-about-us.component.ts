import { Component } from '@angular/core';
import { Founder, Item } from '../../models/card-about-us.model'

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

  activeCardPersonalInfo: boolean = false;
  founders: Founder[] = [
    {
      id: 'f1',
      name: 'Admr. Ángela Yohana Molina',
      photo: '../../../assets/svg/user-default-icon.svg',
      description:
        'Administradora y contadora con mas de 10 años de experiencia en el area.',
    },
    {
      id: 'f2',
      name: 'Psic. Laura Natalia Ostos',
      photo: '../../../assets/svg/user-default-icon.svg',
      description:
        'Psicologa especialista con mas de 10 años de experiencia en el area.',
    },
    {
      id: 'f3',
      name: 'Psic. Néstor Ricardo Ávila',
      photo: '../../../assets/svg/user-default-icon.svg',
      description:
        'Psicologo especialista con mas de 15 años de experiencia en el area.',
    },
    {
      id: 'f4',
      name: 'Ing. Cesar Augusto Niño',
      photo: '../../../assets/svg/user-default-icon.svg',
      description:
        'Ingeniero quimico con mas de 15 años de experiencia en el area.',
    },
  ];

  accordionItems: Item[] = [
    {
      title: 'Objetivo especifico 1',
      text: 'Propiciar espacios que permitan el diseño, aplicación y evaluación de programas y proyectos a favor de la salud física y mental en relación con las habilidades para la vida de la primera infancia, que se ajusten a las características personales, familiares y sociales del ciclo vital al que pertenece esta población.',
      image: '../../../assets/images/objetivo-especifico-1.svg',
      open: false
    },
    {
      title: 'Objetivo específico 2',
      text: 'Favorecer escenarios de promoción de la salud física y mental en relación con las habilidades para la vida, de las poblaciones vulnerables por condiciones o situaciones particulares, teniendo en cuenta las características personales, familiares, sociales y culturales de las mismas. ',
      image: '../../../assets/images/objetivo-especifico-2.svg',
      open: false
    },
    {
      title: 'Objetivo específico 3',
      text: 'Generar estrategias que, desde las características propias de su ciclo vital, promuevan la salud física y mental del adulto mayor en relación con las habilidades para la vida. ',
      image: '../../../assets/images/objetivo-especifico-3.svg',
      open: false
    },
  ];

  constructor() {}

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

  toogleAccordion(item: Item){
    item.open = !item.open;
    console.log(item.open)
  }
}
