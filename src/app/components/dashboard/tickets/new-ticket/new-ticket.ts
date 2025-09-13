import { Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.scss',
})
export class NewTicket {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  addTicket = output<{ title: string; text: string }>();

  onSubmit(title: string, text: string) {
    this.addTicket.emit({ title, text });
    this.form().nativeElement.reset();
  }
}
