import { Component, OnInit, inject } from '@angular/core';
import { NewsService } from './news/news.service';
import { SearchService } from './header/search/search.service';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  newsService = inject(NewsService)
  NEWS: any;
  slicedNews:any;
  Response:any;
  page:number =1;
  loadedFeature = 'categories';
  title = 'news-app';
  ngOnInit(){
    this.newsList()
  }
  constructor(private searchService:SearchService,private paginationService:PaginationService){
    this.searchService.searchInput.subscribe(
      (searchInput:string) => alert('New Search has passed'+searchInput)
    );
  }
  newsList():void{
    this.newsService.fetchData().subscribe((response)=>{
      this.Response = response;
      const totalResult = this.Response.totalResults;
      this.paginationService.maxPageNumber = Math.ceil(totalResult / 20);
      this.NEWS = this.Response.articles
      this.slicedNews = this.NEWS.slice(0,2);
      console.log(this.paginationService.maxPageNumber)
    })
  }
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
