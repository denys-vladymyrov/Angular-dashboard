import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { ServerStatus } from './components/dashboard/server-status/server-status';
import { Traffic } from './components/dashboard/traffic/traffic';
import { Tickets } from './components/dashboard/tickets/tickets';
import { DashboardItem } from './components/dashboard/dashboard-item/dashboard-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Header, ServerStatus, Traffic, Tickets, DashboardItem],
  styleUrl: './app.scss',
})
export class App {}
