import { Injectable,OnInit, inject } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
    providedIn:'root'
})

export class NewsService{
    #newsUrl = 'https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971';
    httpClient = inject(HttpClient);
    data:any[] = [];

    constructor(){
        this.fetchData();
    }

    logUrl(){
        console.log('Url:',this.#newsUrl)
    }
    fetchData(){
        return this.httpClient.get(this.#newsUrl);
    }
}