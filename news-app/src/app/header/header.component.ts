import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import { NavbarService } from './navbar/navbar.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
    page:string = 'Home';
    constructor(private navbarService:NavbarService){


    }
    ngOnInit(): void {
        this.navbarService.selectedFeature.subscribe((feature:string)=> {this.page = feature
             console.log(this.page)} )
    }   


    onSearchInputPassed(searchInput:string){

    }
}