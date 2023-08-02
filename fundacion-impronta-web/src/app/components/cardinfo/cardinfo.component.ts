import { Component } from '@angular/core';
import { Patner } from 'src/app/models/cardinfo.model';
import { Item } from 'src/app/models/cardinfo.model';

@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.component.html',
  styleUrls: ['./cardinfo.component.scss'],
})
export class CardinfoComponent {
  showMoreDescription: boolean = false;
  urlShowMoreDescriptionBtn: string = '../../../assets/svg/more-icon.svg';
  showTextMisionActive: boolean = false;
  showTextVisionActive: boolean = false;

  accordionItems: Item[] = [
    {
      title: 'Objetivo especifico 1',
      text: 'Propiciar espacios que permitan el diseño, aplicación y evaluación de programas y proyectos a favor de la salud física y mental en relación con las habilidades para la vida de la primera infancia, que se ajusten a las características personales, familiares y sociales del ciclo vital al que pertenece esta población.',
      image: '../../../assets/images/objetivo-especifico-1.svg',
      open: false,
    },
    {
      title: 'Objetivo especifico 2',
      text: 'Favorecer escenarios de promoción de la salud física y mental en relación con las habilidades para la vida, de las poblaciones vulnerables por condiciones o situaciones particulares, teniendo en cuenta las características personales, familiares, sociales y culturales de las mismas. ',
      image: '../../../assets/images/objetivo-especifico-2.svg',
      open: false,
    },
    {
      title: 'Objetivo especifico 3',
      text: 'Generar estrategias que, desde las características propias de su ciclo vital, promuevan la salud física y mental del adulto mayor en relación con las habilidades para la vida. ',
      image: '../../../assets/images/objetivo-especifico-3.svg',
      open: false,
    },
  ];

  patners: Patner[] = [
    {
      id: 1,
      name: 'ASOCIACIÓN TU VIDA',
      url_page:
        'https://instagram.com/asociaciontuvida?igshid=MmU2YjMzNjRlOQ==',
      url_image: '../../../assets/images/AsociacionTuVida-Logo.png',
      image_proportion: 90,
    },
    {
      id: 2,
      name: 'HSEQ PROYECTOS DE INGENIERIA',
      url_page: 'https://www.proyectosdeingenieria.com.co',
      url_image: '../../../assets/images/HSEQ-Logo.png',
      image_proportion: 90,
    },
    {
      id: 3,
      name: 'COOTRANSBOL - LINEAS CONCORDE',
      url_page: 'https://www.concordeoficial.com',
      url_image: '../../../assets/images/Concorde-Logo.png',
      image_proportion: 90,
    },
    {
      id: 4,
      name: 'ERTRACT SAS',
      url_page: 'https://www.ertrac.co',
      url_image: '../../../assets/images/Ertrac-Logo.jpg',
      image_proportion: 50,
    },
    {
      id: 5,
      name: '1000 SABORES Y SERVICIOS GENERALES SAS',
      url_page: 'https://www.facebook.com/milsaborestunja/?locale=es_LA',
      url_image: '../../../assets/images/1000Sabores-Logo.jpg',
      image_proportion: 90,
    },
    {
      id: 6,
      name: 'TANIT AGRO DRONES SOLUTIONS SAS',
      url_page: 'https://instagram.com/tanitdrones?igshid=MmU2YjMzNjRlOQ==',
      url_image: '../../../assets/images/Tanit-Logo.png',
      image_proportion: 90,
    },
    {
      id: 7,
      name: 'DEUS Comercializadora de Minerales SAS',
      url_page: '#',
      url_image: '../../../assets/images/Deus-Logo.png',
      image_proportion: 90,
    },
  ];

  toogleDescriptionBtn() {
    this.showMoreDescription = !this.showMoreDescription;
    if (this.showMoreDescription) {
      this.urlShowMoreDescriptionBtn = '../../../assets/svg/rest-icon.svg';
    } else {
      this.urlShowMoreDescriptionBtn = '../../../assets/svg/more-icon.svg';
    }
  }

  showTextMision() {
    this.showTextMisionActive = !this.showTextMisionActive;
  }

  showTextVision() {
    this.showTextVisionActive = !this.showTextVisionActive;
  }

  toogleAccordion(item: Item) {
    item.open = !item.open;
  }
}
