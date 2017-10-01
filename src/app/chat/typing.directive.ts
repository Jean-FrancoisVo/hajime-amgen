import { Directive, ElementRef, Input, OnInit } from '@angular/core';
declare let Typed: any;

@Directive({
  selector: '[appTyping]'
})
export class TypingDirective implements OnInit {
  @Input() text: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const type = new Typed(this.el.nativeElement, {
      strings: [this.text],
      typeSpeed: 30,
      cursorChar: ''
    });

  }
}
