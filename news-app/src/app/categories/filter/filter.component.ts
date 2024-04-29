import { Component } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  selectedFilter = {category:'health',filterValues: ['deneme1','deneme2']};
  constructor(private filterService: FilterService){

  }
  ngOnInit(){
  };

  onSelected(){
    this.filterService.filterSelected.emit(this.selectedFilter);
  }
}
