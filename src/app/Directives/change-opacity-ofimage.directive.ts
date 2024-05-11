import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeOpacityOFImage]',
  standalone: true
})
export class ChangeOpacityOFImageDirective {

  constructor(private elementRef:ElementRef){
  } 
    @HostListener('mouseover') OverImage(){
    this.elementRef.nativeElement.style.opacity=0.7;
    }
    @HostListener('mouseout') OutImage(){
      this.elementRef.nativeElement.style.opacity=1;
      }

}
