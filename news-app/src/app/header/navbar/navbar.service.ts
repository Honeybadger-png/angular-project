import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class NavbarService{
    selectedFeature = new EventEmitter<string>();
}