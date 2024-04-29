import { Injectable,EventEmitter } from "@angular/core";
import { Filter } from "./filter.module";


@Injectable({
    providedIn:'root'
})

export class FilterService{
    filterSelected = new EventEmitter<Filter>();
}