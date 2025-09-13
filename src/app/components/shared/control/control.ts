import {
  AfterContentInit,
  Component,
  contentChild,
  ElementRef,
  input,
  ViewEncapsulation,
  afterNextRender,
  afterEveryRender,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control implements AfterContentInit {
  // @HostBinding() className = 'control';
  label = input.required<string>();
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterNextRender(() => {
      console.log('afterNextRender:');
    });

    afterEveryRender(() => {
      console.log('afterEveryRender:');
    });
  }

  ngAfterContentInit() {
    console.log(this.control());
  }

  onClick() {
    console.log(this.control());
  }
}
