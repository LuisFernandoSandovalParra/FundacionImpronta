import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  activeMenu = false;

  constructor(private router: Router){
  }

  ngOnInit(): void {}

  toogleMenu(){
    this.activeMenu = !this.activeMenu;
  }

  goToInit(){
    this.router.navigate(['/inicio'])
  }

  goToAboutUs(){
    this.router.navigate(['/nosotros'])
  }
}
