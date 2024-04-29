import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})


export class CategoriesService{
    private categories:Array<string> = [
        'Health',
        'Politic',
        'Business',
        'Sport'
    ]

    getCategories(){
        this.categories.slice();
    }
    
}