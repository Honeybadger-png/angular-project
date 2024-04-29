import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter/filter.service';
import { Filter } from './filter/filter.module';
import { CategoriesService } from './categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  selectedFilter:Filter;

  constructor(
    private filterService: FilterService,
    private categoryService:CategoriesService,
    private router:Router,private route: ActivatedRoute){

  }
  // onCategory select
  onCategorySelect(selection:any){
    // this.router.navigate(['/category'],{relativeTo:this.route})
  }

  ngOnInit(){
    this.filterService.filterSelected.subscribe((filter:Filter)=>{
      console.log("deneme"+filter.category);
    })
  }

}
