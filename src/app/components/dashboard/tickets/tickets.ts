import { Component, signal } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import { ITicket } from '../../../model';
import { Ticket } from './ticket/ticket';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.scss',
})
export class Tickets {
  tickets = signal<ITicket[]>([]);

  onAddTicket(ticketData: { title: string; text: string }) {
    const ticket: ITicket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open',
    };

    this.tickets.update((tickets) => [...tickets, ticket]);
  }

  onCloseTicket(id: string) {
    this.tickets.update((tickets) =>
      tickets.map((t) => {
        return t.id === id ? { ...t, status: 'closed' } : t;
      }),
    );
  }
}
