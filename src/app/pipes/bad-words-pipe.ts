import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badWords',
})
export class BadWordsPipe implements PipeTransform {

  transform(value: number): string {
    
    const badWords = ['cazzo', 'vaffanculo', 'troia', 'stronzo', 'merda', 'porco due', 'porco cane', 'bastardo', 'fottiti', 'belin'];

    const index =  value % 10;

    return badWords[index];

  }

}
