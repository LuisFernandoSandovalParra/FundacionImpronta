import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DialogInfoProjectComponent } from '../dialog-info-project/dialog-info-project.component';
import { DataSharingService } from 'src/app/data-sharing.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit{
  constructor(
    private dataSharingService: DataSharingService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private dataService: DataService
  ) {}

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

  projects: Project[] = [];

  ngOnInit(): void {
    this.dataService.getProjectList().subscribe(data => {
      for (let i = 0; i < data.info.length; i++) {
        this.currentProject = {
          id: data.info[i].project_id,
          title: data.info[i].title,
          abstract: data.info[i].abstract,
          description: data.info[i].description,
          problematic: data.info[i].problematic,
          proposal: data.info[i].proposal,
          image: data.info[i].url_image,
          expected_budget: data.info[i].expected_budget,
          current_budget: data.info[i].current_budget,
          video: data.info[i].url_video,
          state: data.info[i].state,
          project_type: data.info[i].project_type
        }
        this.projects.push(this.currentProject);
      }
    })
  }

  getListProject(type: string): Project[] {
    let projects: Project[] = [];
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].project_type === type) {
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
        type: 'project',
        project: this.currentProject,
        exp_budget: this.convertToCop(this.currentProject.expected_budget),
        curr_budget: this.convertToCop(this.currentProject.current_budget),
        progress: this.calculateProgressProject(this.currentProject.id),
      },
    });

    dialogRef.afterClosed().subscribe((result) => {

    });
  }

  sendData(projectTitle: string) {
    this.dataSharingService.updateSelectData(projectTitle);
  }
}
