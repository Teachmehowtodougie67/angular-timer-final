import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-clock-component',
  imports: [DatePipe],
  templateUrl: './clock-component.html',
  styleUrl: './clock-component.scss',
})
export class ClockComponent {

  time = input<Date>(new Date());
  fontSize = input<number>(20);

  // formattedTime = computed(() => {

  //   let dateString = "";
  //   dateString += this.time().getDate().toString().padStart(2, '0');;
  //   dateString += '/';
  //   dateString += (this.time().getMonth() + 1).toString().padStart(2, '0');;
  //   dateString += '/';
  //   dateString += this.time().getFullYear();
  //   dateString += ' ';
  //   dateString += this.time().getHours();
  //   dateString += ':';
  //   dateString += this.time().getMinutes().toString().padStart(2, '0');
  //   dateString += ':';
  //   dateString += this.time().getSeconds().toString().padStart(2, '0');;


  //   return dateString;
  // })

}
