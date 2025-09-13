import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.scss',
})
export class ServerStatus implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private interval = signal<ReturnType<typeof setInterval> | undefined>(undefined);

  constructor() {}

  ngOnInit() {
    this.interval.set(
      setInterval(() => {
        const rnd = Math.random();

        if (rnd < 0.5) {
          this.currentStatus = 'online';
        } else if (rnd < 0.9) {
          this.currentStatus = 'offline';
        } else {
          this.currentStatus = 'unknown';
        }
      }, 5000),
    );
  }

  ngOnDestroy() {
    clearTimeout(this.interval());
  }
}
