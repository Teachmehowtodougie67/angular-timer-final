import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badWordsLocalized',
})
export class BadWordsLocalizedPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    
    const badWordEng = ['shitty', 'damned', 'bastard'];
    const badWordItaMale = ['merdoso', 'maledetto', 'bastardo'];
    const badWordItaFemale = ['troia', 'maledetta', 'bastarda'];

    let selectedArray;

    if(args[0] === 'it'){
      if(args[1] === 'male'){
        selectedArray = badWordItaMale;
      } else {
        selectedArray = badWordItaFemale;
      }

    } else {
      selectedArray = badWordEng;
    }

    const index =  value % 3;

    return selectedArray[index];
  }

}
