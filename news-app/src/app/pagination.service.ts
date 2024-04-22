import { Injectable } from "@angular/core";
import { NewsService } from "./news/news.service";

@Injectable(
    {providedIn:'root'}
)

export class PaginationService{
    pageNumber = 1;
    maxPageNumber : number;

    constructor(private newsService: NewsService){
        console.log(this.maxPageNumber)
    }
}