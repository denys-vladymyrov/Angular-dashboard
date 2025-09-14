import { Component, input, output, signal } from '@angular/core';
import { ITicket } from '../../../../model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.scss',
})
export class Ticket {
  data = input.required<ITicket>();
  close = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    //this.detailsVisible.set(!this.detailsVisible);
    this.detailsVisible.update((prevValue) => !prevValue);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
