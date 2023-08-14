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
  constructor(private sanitizer: DomSanitizer, private dialog: MatDialog) {}

  projectTypeSelected = 'social';

  btnProjectTypeSelectedActive = false;
  activeProjectCards = false;

  currentProject: Project = {
    id: 0,
    title: '',
    abstract: '',
    description: '',
    problematic: '',
    proposal: '',
    image: '',
    expected_budget: 0,
    current_budget: 0,
    video: '',
    state: '',
    project_type: '',
  };

  projects: Project[] = [
    {
      id: 1,
      title: 'Malecon',
      abstract:
        'El proyecto pretende generar un espacio de atención que mitigue las dificultades que pueden agredir la salud física y mental en el momento critico que implica la culminación de la vida escolar una vez las personas se gradúan como bachilleres de grado 11.',
      description:
        'Muchos jóvenes se consideran sin herramientas para continuar con su vida luego de terminar el colegio y otros tantos consideran no tener elementos para tomar decisiones acertadas al respecto, lo que guarda relación con factores de riesgo para la salud física y mental como lo es el riesgo e intento suicida. Nuestra intención es ofrecerle al joven que al transcurrir por este momento crítico en su proyecto de vida, pueda contar con un servicio de salud mental virtual que favorezca a través de lo que la Psicología reconoce como Counseling y el acompañamiento telefónico de emergencia, la posibilidad de atravesar por este momento de la manera más saludable posible; siendo MALECÓN por el hecho de que nuestra intención fue metaforizar cada una de las estructuras arquitectónicas de un malecón, en pro de brindar en la vida del joven que acuda al proyecto una estructura lo suficientemente sólida como para enfrentar las adversidades, así como un malecón enfrenta con éxito los rebases del agua.',
      problematic:
        'La evidencia teórica y empírica ha demostrado que terminar el colegio es un momento crítico de alto impacto para el proyecto de vida que puede hacer que los jóvenes se sientan sin suelo y por ende implica un factor de riesgo para la salud física y mental',
      proposal:
        'Buscamos brindar un espacio cuya base sea la estrategia de la psicología denominada counseling acompañado de una línea telefónica de emergencia 24 horas, como estrategia de apoyo a la crisis que sufre el joven en su proyecto de vida al momento de terminar.',
      image:
        'https://www.elheraldo.co/sites/default/files/styles/widht_760/public/articulo/2017/10/27/02.jpg?itok=7lA9cQXw',
      expected_budget: 200000000,
      current_budget: 100000000,
      video: 'https://www.youtube.com/embed/urqMKaCgZZQ',
      state: 'active',
      project_type: 'social',
    },
    {
      id: 2,
      title: 'Paz Positiva',
      abstract:
        'Diseño de un programa de formación de gestoras de paz positiva basado en mecanismos alternativos de justicia, dirigido a los casos de violencia intrafamiliar de cinco municipios de Boyacá',
      description:
        'En el editorial del primer número del Journal of Peace research de 1964, Galtung formula por primera vez la distinción entre paz positiva y paz negativa, definiendo la paz negativa como «la ausencia de violencia y de guerra» y la paz positiva como «la integración de la sociedad humana». En este sentido la paz negativa tiene su esencia en los procesos de justicia transicional de los estados, los cuales están basados en compromisos políticos de cese de hostilidades cuando existen conflictos armados, que se materializan en firmas de documentos públicos, mas no en una acción social por generar dinámicas cognitivas y comportamentales que hagan que mitiguen los comportamientos hostiles propios del diario vivir, los cuales generan un mantenedor a las dinámicas sociales de violencia. La paz positiva de conformidad al planteamiento de Galtung, implica un cambio cognitivo y comportamental de las personas que se refleja en las interacciones diarias, una vez estas se transforman en una pauta de convivencia que busca mitigar la violencia. En este sentido el proyecto busca formar un grupo de mujeres de cada municipio en el que se pretende aplicar el proyecto como GESTORAS DE PAZ POSITIVA PARA LA VIOLENCIA INTRAFAMILIAR, educando estrategias basadas en mecanismos alternativos de justicia y la manera en la que estas se pueden direccionar a abordar los casos de violencia intrafamiliar, siendo este tipo de violencia el foco de atención del proyecto por su alto potencial destructivo del tejido social al ser concebida por Colombia la familia como el núcleo fundamental de la sociedad (ART 42 CPC).',
      problematic: 'Violencia intrafamiliar.',
      proposal:
        'Generar estrategias que permitan mitigar las altas cifras de violencia intrafamiliar propias del contexto, desde mecanismos que permitan una reparación real para las victimas y procesos de mediación para los conflictos y no se reduzcan a la judicialización de los victimarios. Igualmente, el proyecto se direcciona a la protección del núcleo fundamental de la sociedad: la familia (ART 42 CPC).',
      image:
        'https://images.jifo.co/103439701_1630891647316.jpg',
      expected_budget: 0,
      current_budget: 0,
      video: 'https://www.youtube.com/embed/6a5BDfLtp6g',
      state: 'active',
      project_type: 'social',
    },
    {
      id: 3,
      title: 'Catedra de paz',
      abstract:
        'Una estrategia desde la producción audiovisual. La ley 1732 de 2014, establece la Cátedra de la Paz en todas las instituciones educativas del país. En este sentido que muchas instituciones educativas del país no hallan aun gestionado los recursos económicos ni humanos que se requieren para el montaje de dicha catedra, implica un incumplimiento a una ley del estado colombiano.',
      description:
        'La ley 1732 de 2014, establece la Cátedra de la Paz en todas las instituciones educativas del país. En este sentido que muchas instituciones educativas del país no hallan aun gestionado los recursos económicos ni humanos que se requieren para el montaje de dicha catedra, implica un incumplimiento a una ley del estado colombiano. Este proyecto implica el diseño de este espacio educativo, implementando para ello elementos teóricos y empíricos de la construcción de paz, implementando de manera básica como elemento pedagógico para su transmisión LA PRODUCCIÓN AUDIOVISUAL, la cual a través de diferentes estrategias pedagógicas realizadas en diferentes contextos ha demostrado su efectividad como insumo para la autogestión del aprendizaje, el desarrollo del pensamiento creativo y la manutención de la motivación de los estudiantes en los procesos académicos. Todo lo anterior hace de la producción audiovisual una estrategia de aprendizaje significativo en torno a la manera en la que se diseño el currículo de la catedra para la paz en el presente proyecto. ',
      problematic:
        'Incumplimiento de las instituciones educativas del marco legislativo tipificado en la ley 1732 de 2014, la cual solicita la gestión del diseño y aplicación de una catedra para la paz en las instituciones educativas.',
      proposal:
        'Promover la creación de la catedra para la paz, desde estrategias de aprendizaje significativo como las emergentes de la producción audiovisual.',
      image:
        'https://www.eltiempo.com/files/image_640_428/uploads/2023/03/10/640b79ce4a734.jpeg',
      expected_budget: 0,
      current_budget: 0,
      video: 'https://www.youtube.com/embed/5kyPjQSuwO4',
      state: 'active',
      project_type: 'social',
    },
    {
      id: 4,
      title: 'Target',
      abstract:
        'Construcción de una institución de educación basica segundaria y de educación media basada en el modelo target de autogestión del conocimiento.',
      description:
        'La realidad del contexto a puesto de manifiesto que los modelos pedagógicos de muchas de las instituciones de educación básica secundaria y media inmersos en el Proyecto Educativo Institucional de las mismas (PEI), están basados en modelos pedagógicos que anulan o limitan la autogestión del conocimiento, lo que genera falencias del saber, del saber hacer y del ser que se vuelven evidentes una vez la persona obtiene su titulo de bachillerato para enfrentarse a la nueva etapa de su vida. En este sentido este proyecto identifico que la autogestión del aprendizaje y el conocimiento puede ser el elemento que mitigue dichas falencias y por el contrario potencialice las competencias del saber, del saber hacer y del ser, al punto de formar estudiantes que al obtener su titulo de bachillerato, manifiesten en su repertorio cognitivo y conductual fuertes bases relativas a la crítica, la creatividad, la autonomía y el compromiso social. En este orden de ideas es el MODELO TARGET de autogestión del conocimiento la base del proyecto y por ende la axial del modelo pedagógico de la institución.',
      problematic:
        'Un sistema educativo de formación básica secundaria y media vocacional, que demuestra falencias en sus procesos de enseñanza aprendizaje al no estar vinculados estos con la autogestión del conocimiento.',
      proposal:
        'Promover una institución educativa de formación básica secundaria y media vocacional cuyo Proyecto Educativo Institucional este basado en un modelo de autogestión del conocimiento (TARGET).',
      image:
        'https://search4local.co.uk/wp-content/uploads/2023/03/reaching-your-target-audience-online-scaled.jpeg',
      expected_budget: 200000000,
      current_budget: 100000000,
      video: 'https://www.youtube.com/embed/dIaOzrDP568',
      state: 'active',
      project_type: 'extension',
    },
    {
      id: 5,
      title: 'Consultorio movil',
      abstract:
        'el presente proyecto busca hacer visible a la familia de quien es diagnosticado con una enfermedad crónica, al reconocer la afectación a ala salud metal que implica asumir la enfermedad de aquel familiar que se ama.',
      description:
        'El plan obligatorio de salud (POS), puede llegar a brindar los elementos mínimos requeridos para la manutención de la salud física del paciente crónico y en algunas ocasiones se activan recursos para atender la afectación a la salud mental inherente al hecho de asumir la realidad propia de tener el diagnostico de una enfermedad crónica. A pesar de lo anterior la evidencia a puesto de manifiesto que los protocolos del POS, en relación a la salud mental son escasos e ineficientes y dejan de lado la afectación a la salud mental propia del microsistema (las familias), del paciente diagnosticado con una enfermedad crónica, pues dicha cronicidad, marca una pauta de comportamiento en el paciente que debe ser asumida de manera directa e inmediata por su núcleo familiar, lo que desarrolla en gran parte de los casos una afectación psicológica en los miembros de dicho núcleo, afectación que no es visibilizada y por ende atendida por el sistema de salud. En virtud de lo anterior el presente proyecto busca hacer visible a la familia de quien es diagnosticado con una enfermedad crónica, al reconocer la afectación a ala salud metal que implica asumir la enfermedad de aquel familiar que se ama. Para ello se plantea la puesta en marcha de un consultorio móvil que permita la atención psicológica y por ende en salud mental de estas familias, favoreciendo el acceso, al llevar esta atención a la puerta de la casa de cada caso a ser atendido ante la dinámica de movilidad que permite un consultorio móvil. ',
      problematic:
        'Las afectaciones a la salud mental del núcleo familiar que enfrenta tener a uno de sus integrantes padeciendo los signos y síntomas propios de una enfermedad crónica.',
      proposal:
        'Mitigar la afectación ala salud mental del núcleo familiar que enfrenta tener a uno de sus integrantes padeciendo los signos y síntomas propios de una enfermedad crónica, ofreciendo para ello un servicio de fácil acceso al darse este en la puerta de la casa de estas familias a través de un consultorio móvil.',
      image:
        'https://knocolombia.com/wp-content/uploads/2018/11/clinica-mujer-3-1024x426.jpg',
      expected_budget: 200000000,
      current_budget: 100000000,
      video: 'https://www.youtube.com/embed/PXj27q4TgZk',
      state: 'active',
      project_type: 'extension',
    },
    {
      id: 6,
      title: 'Producción audiovisual',
      abstract:
        'Estrategia para formar en producción audiovisual como elemento estrategico del marketing digital.',
      description:
        'La realidad del contexto ha hecho que los procesos de emprendimiento sean reconocidos como una actividad laboral pertinente para los jóvenes de nuestro contexto, y las estrategias implementadas por esta población en muchas ocasiones están relacionadas con el hecho de convertir su producto o servicio en una marca lo suficientemente llamativa como para ser adquirida por el mercado. En este sentido el presente proyecto busca propiciar un espacio de formación técnico laboral en Producción Audiovisual cuyo plan de estudios tenga una línea base en Marketing Digital, una vez es claro que las herramientas propias de la Producción Audiovisual acompañadas por el Marketing Digital, generan el escenario pedagógico pertinente para impulsar los productos y servicios de los jóvenes que se inscriban al proyecto ante su conexidad con la gestión de marca. ',
      problematic:
        'Las tasas de desempleo del país han hecho que los procesos de emprendimiento se vuelvan una opción para los jóvenes, a pesar de ello muchos de ellos no reconocen la manera de impulsar su marca.  ',
      proposal:
        'El proyecto permite el desarrollo de competencias en producción audiovisual adheridas al marketing digital, y por ende brinda una estrategia de aprendizaje pertinente y conducente al desarrollo de las marcas sobre las que se puede gestionar la venta los productos y servicios de los jóvenes que hagan parte del proyecto. ',
      image:
        'https://colectivoweb.com/wp-content/uploads/2021/08/para-que-sirve-el-marketing-digital.jpg',
      expected_budget: 0,
      current_budget: 0,
      video: 'https://www.youtube.com/embed/zBKtZvy5r1A',
      state: 'active',
      project_type: 'social'
    },
    {
      id: 7,
      title: 'Colectivo artistico y cultural',
      abstract:
        'Al considerar el desarrollo de actividades culturales como un factor de protección de la salud física y mental, se gestiona el colectivo artístico y cultural IMPRONTA.',
      description:
        'Al considerar el desarrollo de actividades culturales como un factor de protección de la salud física y mental, se gestiona el colectivo artístico y cultural IMPRONTA, cuyos objetivos guardan una relación estrecha con la gestión de relaciones humanas adaptativas, la potenciación de habilidades sociales, la gestión de acciones que estimulan la motricidad fina y gruesa y representa un espacio sobre el cual se pueda potenciar las habilidades para la vida. ',
      problematic:
        'Factor de riesgo que implica el déficit en el manejo del tiempo libre para la salud física y mental. ',
      proposal:
        'Promover espacios artísticos y culturales que promuevan el manejo del tiempo libre e impliquen la potenciación de habilidades sociales, la gestión de acciones que estimulan la motricidad fina y gruesa y representa un espacio sobre el cual se pueda potenciar las habilidades para la vida. ',
      image:
        'https://colectivoweb.com/wp-content/uploads/2021/08/para-que-sirve-el-marketing-digital.jpg',
      expected_budget: 100,
      current_budget: 0,
      video: 'https://www.youtube.com/embed/zBKtZvy5r1A',
      state: 'active',
      project_type: 'extension'
    },
    {
      id: 8,
      title: 'Centro de inteligencia vial',
      abstract:
        'el presente proyecto busca la creación de un espacio de prevención y rehabilitación de dicha accidentalidad, ante la creación de tres escenarios: dos espacios de formación y uno de rehabilitación.',
      description:
        'Ante las dinámicas propias de las vías de tránsito, y su relación con la probabilidad de que la salid física y/o mental de los actores viales pueda ser afectada en las vías ante los accidentes de tránsito, el presente proyecto busca la creación de un espacio de prevención y rehabilitación de dicha accidentalidad, ante la creación de tres escenarios: dos espacios de formación y uno de rehabilitación. Los espacios de formación reconocen en una primera instancia la importancia de enseñar a conducir, y en una segunda, la prioridad que podría tener la emergencia del conocimiento técnico en Inteligencia vial. El tercer espacio, es relativo a procesos de rehabilitación de la salud física y mental cuando alguna de estas se ve afectada en los actores viales. Ante esta estructura se genera un proyecto con la capacidad de mitigar el daño en la salud física y mental en el actor vial, una vez se prioriza con el proyecto la educación en el conducir y la especialización de dicha educación a través de la formación técnica en Inteligencia Vial. Así mismo, se prioriza la manutención de la salud física y mental al propender espacios de rehabilitación de estos dos factores. ',
      problematic:
        'Afectación de la salud física y mental de los actores viales. ',
      proposal:
        'Promover espacios de prevención y rehabilitación a la salud física mental ante las afectaciones que emergen en estas ante la interacción del hombre en las vías.',
      image:
        'https://ufpsbienestar.files.wordpress.com/2014/02/imagen.gif',
      expected_budget: 100,
      current_budget: 0,
      video: 'https://www.youtube.com/embed/zBKtZvy5r1A',
      state: 'active',
      project_type: 'extension'
    },
    {
      id: 9,
      title: 'Gestión del Emprendimiento',
      abstract:
        'En este sentido Impronta creo a través de este proyecto un escenario en el que se pretende brindar las asesorías técnicas y metodológicas necesarias para que las personas pertenecientes al Fondo Emprender.',
      description:
        'Ante la clara necesidad de la emergencia de espacios laborales para las personas, emprender se ha consolidado en nuestro tiempo como una opción percibida como pertinente para muchos. En este sentido Impronta creo a través de este proyecto un escenario en el que se pretende brindar las asesorías técnicas y metodológicas necesarias para que las personas pertenecientes al Fondo Emprender, cuenten con la posibilidad de que su emprendimiento sea sostenible en el contexto y se proyecte al crecimiento a mediano y largo plazo. ',
      problematic:
        'Tasas de desempleo del contexto en conexidad con la falta de elementos que percibe la población ala momento de buscar gestionar e impulsar emprendimientos. ',
      proposal:
        'Mitigar los obstáculos percibidos por las personas pertenecientes al fondo emprender al momento de poner en marcha un emprendimiento. ',
      image:
        'https://uploadgerencie.com/imagenes/emprendimiento.png',
      expected_budget: 100,
      current_budget: 0,
      video: 'https://www.youtube.com/embed/YZi5vam33ow',
      state: 'active',
      project_type: 'social'
    },
  ];

  getListProject(type: string): Project[] {
    let projects: Project[] = [];
    for (let i = 0; i < this.projects.length; i++) {
      if(this.projects[i].project_type === type){
        projects.push(this.projects[i]);
      }
    }
    return projects;
  }

  changeProjectTypeSelected(project_type: string) {
    switch (project_type) {
      case 'social':
        this.projectTypeSelected = 'social';
        this.btnProjectTypeSelectedActive = false;
        this.activeProjectCards = false;
        break;
      case 'extension':
        this.projectTypeSelected = 'extension';
        this.btnProjectTypeSelectedActive = true;
        this.activeProjectCards = true;
        break;
      default:
        break;
    }
  }

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

  getCurrentVideoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.currentProject.video
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogInfoProjectComponent, {
      data: {
        project: this.currentProject,
        exp_budget: this.convertToCop(this.currentProject.expected_budget),
        curr_budget: this.convertToCop(this.currentProject.current_budget),
        progress: this.calculateProgressProject(this.currentProject.id),
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('El diálogo ha sido cerrado', result);
    });
  }
}
