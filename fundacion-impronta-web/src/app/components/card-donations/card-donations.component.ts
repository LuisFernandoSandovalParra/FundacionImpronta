import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { environment } from 'environment';
import { Project } from 'src/app/models/project.model';
import { DataSharingService } from 'src/app/data-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-donations',
  templateUrl: './card-donations.component.html',
  styleUrls: ['./card-donations.component.scss'],
  providers: [DataService],
})
export class CardDonationsComponent implements OnInit {
  private selectDataSubscription: Subscription;

  currency: string = 'COP';
  amountInCents: string = '';
  reference: string = '';
  integrity: string = '';
  publicKey = environment.publicKey;
  email: string = '';
  fullName: string = '';
  phoneNumber: string = '';
  documentType: string = '';
  documentNum: string = '';
  redirectLink: string = 'http:localhost:4200/inicio';

  donationType: string = '';
  projectSelected: string = '';

  constructor(
    private dataSharingService: DataSharingService,
    private dataService: DataService
  ) {
    this.selectDataSubscription = this.dataSharingService.selectData$.subscribe(
      (data) => {
        this.donationType = 'proyecto';
        this.projectSelected = data.toString();
      }
    );
  }

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
    this.dataService.getProjectList().subscribe((data) => {
      for (let i = 0; i < data.info.length; i++) {
        this.currentProject = {
          id: data.info[i].project_id,
          title: data.info[i].title,
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
        this.projects.push(this.currentProject);
      }
    });
  }

  ngOnDestroy() {
    this.selectDataSubscription.unsubscribe();
  }

  formatCentCop(amount: string) {
    const cantidadNumerica = amount.replace(/[^0-9.]/g, '');
    const cantidadCentavosCOP = parseFloat(cantidadNumerica) * 100;
    return cantidadCentavosCOP.toString();
  }

  getIntegrityFirm() {
    this.amountInCents = this.formatCentCop(this.amountInCents);
    this.dataService.getIntegrity(this.amountInCents).subscribe((data) => {
      this.reference = data.reference;
      this.integrity = data.result;
      const url = 'https://checkout.wompi.co/p/';
      const queryParams = `?public-key=${this.publicKey}&currency=${this.currency}&amount-in-cents=${this.amountInCents}&reference=${this.reference}&signature:integrity=${this.integrity}&redirect-url=${this.redirectLink}&customer-data:email=${this.email}&customer-data:full-name=${this.fullName}&customer-data:phone-number=${this.phoneNumber}&customer-data:legal-id=${this.documentNum}&customer-data:legal-id-type=${this.documentType}`;
      window.location.href = url + queryParams;
    });
  }
}
