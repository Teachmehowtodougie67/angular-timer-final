import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cursingwords',
})
export class CursingwordsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
