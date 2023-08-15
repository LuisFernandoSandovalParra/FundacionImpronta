import { Component, OnInit } from '@angular/core';
import { NgxCurrencyDirective } from 'ngx-currency';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'fundacion-impronta-web';

  ngOnInit(): void{
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }
}
