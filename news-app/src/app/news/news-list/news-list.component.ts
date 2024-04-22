import { Component, Input } from '@angular/core';
import { News } from '../news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {
  @Input() singleNews : any;
  constructor(){
  }
}
