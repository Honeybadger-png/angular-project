import { Component,EventEmitter, Output } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isDropDownActive = false;
  selectedCategory :any;
  constructor(private navbarService:NavbarService){

  }
  categories = [
    {name:'Health', value:'Health'},
    {name:'Sport', value:'Sport'},
    {name:'Business', value:'Business'},
    {name:'Politic', value:'Politic'},
  ]
  
  onSelect(feature:any){
    feature.toString();
    this.navbarService.selectedFeature.emit(feature);
  }
}
