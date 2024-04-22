
import { Component, Input, OnInit, inject } from '@angular/core';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent implements OnInit{
  @Input('news') news: any;


  constructor(){

  }
  ngOnInit(): void {
  }

}
