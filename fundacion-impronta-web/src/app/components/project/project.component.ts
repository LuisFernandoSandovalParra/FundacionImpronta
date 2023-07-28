import { Component } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoProjectComponent } from '../dialog-info-project/dialog-info-project.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {

  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog){}

  currentProject: Project = {
    id: 0,
    title: '',
    abstract: '',
    description: '',
    topic: '',
    problematic: '',
    proposal: '',
    population: '',
    place_application: '',
    representative: '',
    image: '',
    expected_budget: 0,
    current_budget: 0,
    video: '',
  };

  projects: Project[] = [
    {
      id: 1,
      title: 'Malecon',
      abstract:
        'El proyecto pretende generar un espacio de atención que mitigue las dificultades que pueden agredir la salud física y mental en el momento critico que implica la culminación de la vida escolar una vez las personas se gradúan como bachilleres de grado 11.',
      description:
        'Muchos jóvenes se consideran sin herramientas para continuar con su vida luego de terminar el colegio y otros tantos consideran no tener elementos para tomar decisiones acertadas al respecto, lo que guarda relación con factores de riesgo para la salud física y mental como lo es el riesgo e intento suicida. Nuestra intención es ofrecerle al joven que al transcurrir por este momento crítico en su proyecto de vida, pueda contar con un servicio de salud mental virtual que favorezca a través de lo que la Psicología reconoce como Counseling y el acompañamiento telefónico de emergencia, la posibilidad de atravesar por este momento de la manera más saludable posible; siendo MALECÓN por el hecho de que nuestra intención fue metaforizar cada una de las estructuras arquitectónicas de un malecón, en pro de brindar en la vida del joven que acuda al proyecto una estructura lo suficientemente sólida como para enfrentar las adversidades, así como un malecón enfrenta con éxito los rebases del agua.',
      topic: 'Salud mental y bienestar',
      problematic:
        'La evidencia teórica y empírica ha demostrado que terminar el colegio es un momento crítico de alto impacto para el proyecto de vida que puede hacer que los jóvenes se sientan sin suelo y por ende implica un factor de riesgo para la salud física y mental',
      proposal:
        'Buscamos brindar un espacio cuya base sea la estrategia de la psicología denominada counseling acompañado de una línea telefónica de emergencia 24 horas, como estrategia de apoyo a la crisis que sufre el joven en su proyecto de vida al momento de terminar.',
      population:
        'La población estaría conformada por jóvenes de habla hispana de diversos países, que se encuentran cursando el ultimo grado de secundaria y por ende están enfrentando el momento crítico en el proyecto de vida. Exactamente 3840 jovenes.',
      place_application: 'Colombia',
      representative:
        'Laura Natalia Ostos Molina (psicóloga, especialista en psicología clínica en curso).',
      image:
        'https://www.elheraldo.co/sites/default/files/styles/widht_760/public/articulo/2017/10/27/02.jpg?itok=7lA9cQXw',
      expected_budget: 200000000,
      current_budget: 100000000,
      video: "https://www.youtube.com/embed/urqMKaCgZZQ",
    },
  ];

  calculateProgressProject(id_in: number) {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id === id_in) {
        return (
          (100 * this.projects[i].current_budget) /
          this.projects[i].expected_budget
        );
      }
    }
    return 0;
  }

  convertToCop(value: number) {
    let copFormat = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
    });
    return copFormat.format(value);
  }

  convertToUs(value: number) {
    let usFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return usFormat.format(value);
  }

  covertToMoney(value: number, moneyKind: string) {
    switch (moneyKind) {
      case 'COP':
        return this.convertToCop(value);
      case 'USD':
        return this.convertToUs(value);
      default:
        return value;
    }
  }

  showMoreProjectInfo(project_id: number) {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id === project_id) {
        this.currentProject = this.projects[i];
        this.openDialog();
      }
    }

  }

  getCurrentVideoUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentProject.video)
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogInfoProjectComponent, {
      data: {
        project: this.currentProject,
        exp_budget: this.convertToCop(this.currentProject.expected_budget),
        curr_budget: this.convertToCop(this.currentProject.current_budget),
        progress: this.calculateProgressProject(this.currentProject.id),
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo ha sido cerrado', result);
    });
  }
}
