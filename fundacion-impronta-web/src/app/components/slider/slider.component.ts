import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy{
  images:{url: string, caption: string}[] = [
    {url:"../../../assets/images/slider1.svg", caption:'Imagen1'},
    {url:"../../../assets/images/slider2.svg", caption:'Imagen2'}
  ];
  currentImageIndex = 0;
  interval: any;

  constructor(){}

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    this.stopSlider();
  }

  startSlider(){
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 3000);
  }

  stopSlider(){
    clearInterval(this.interval);
  }

  showNextImage(){
    this.currentImageIndex++;
    if(this.currentImageIndex === this.images.length){
      this.currentImageIndex = 0;
    }
  }

  showPreviousImage() {
    this.currentImageIndex--;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    }
  }
  print(){
    console.log('si sirve')
  }
}
