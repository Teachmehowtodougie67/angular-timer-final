import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimerComponent } from "./components/timer-component/timer-component";
import { ClockComponent } from "./components/clock-component/clock-component";
import { TimeService } from './services/time-service/time-service';
import { ControlsComponent } from "./components/controls-component/controls-component";

@Component({
  selector: 'app-root',
  imports: [TimerComponent, ClockComponent, ControlsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {


  timeS = inject(TimeService);

  timeStep = signal<number>(1);

  changeTimeStep(step: number) {
    this.timeStep.set(step);
  }

}
