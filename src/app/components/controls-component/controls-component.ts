import { Component, output } from '@angular/core';

@Component({
  selector: 'app-controls-component',
  imports: [],
  templateUrl: './controls-component.html',
  styleUrl: './controls-component.scss',
})
export class ControlsComponent {

  timeStepChanged = output<number>();

}
