import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class SearchService {
    searchInput = new EventEmitter<string>();
}