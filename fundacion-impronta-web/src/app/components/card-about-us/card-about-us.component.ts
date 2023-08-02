import { Component } from '@angular/core';
import { Founder } from '../../models/card-about-us.model'

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
