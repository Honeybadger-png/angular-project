import { Component, ElementRef, ViewChild,EventEmitter, Output } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @ViewChild('searchInput',{static:false}) searchInputRef: ElementRef;


  constructor(private searchService:SearchService){

  }

  onSearch(){
    const searchInput = this.searchInputRef.nativeElement.value;
    this.searchInputRef.nativeElement.value = '';
    this.searchService.searchInput.emit(searchInput);
  }

}
