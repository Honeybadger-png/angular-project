import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isDropDownActive = false;
  selectedCategory :any;
  @Output() featureSelected = new EventEmitter<string>();
  categories = [
    {name:'Health', value:'Health'},
    {name:'Sport', value:'Sport'},
    {name:'Business', value:'Business'},
    {name:'Politic', value:'Politic'},
  ]
  
  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }
}
