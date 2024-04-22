import { Component,OnInit,Input } from '@angular/core';

interface carouselImage{
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() images: carouselImage[] = []

  selectedIndex = 0;

}
