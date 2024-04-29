import { Component, OnInit, inject } from '@angular/core';
import { NavbarService } from './header/navbar/navbar.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'news-app';
  isItFallout = false;

  constructor(private navbarService: NavbarService,private route:ActivatedRoute){
    this.route.queryParamMap.subscribe((p:any)=>{
      if(p.params['page'] === 'fallout'){
        this.isItFallout = true;
      }else{
        this.isItFallout = false;
      }
    });
  }

  ngOnInit(){

  }
  
}
