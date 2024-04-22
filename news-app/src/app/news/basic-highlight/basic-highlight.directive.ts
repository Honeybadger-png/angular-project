import { Directive,ElementRef ,HostBinding,HostListener,OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
    @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';
    
    constructor(private elementRef:ElementRef,private renderer: Renderer2){

    }
    ngOnInit(): void {
        //this.elementRef.nativeElement.setElementClass(this.elementRef, 'col-md-5')
    }
    @HostListener('mouseenter') mouseover(eventData:Event){
        this.backgroundColor = 'blue'
    }
    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.backgroundColor = 'transparent';
    }


}