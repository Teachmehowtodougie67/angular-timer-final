import { UpperCasePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-timer-component',
  imports: [UpperCasePipe],
  templateUrl: './timer-component.html',
  styleUrl: './timer-component.scss',
})
export class TimerComponent {

  seconds = input<number>(0);
  title = input<string>('Timer');
  color = input<string>('#ffffff');
  timeStep = input<number>(1);
  
  calculatedTime = computed(() => {
    const newTime = this.seconds() / this.timeStep()
    console.log( newTime, this.seconds(), this.timeStep())
    return newTime;
  })

}
