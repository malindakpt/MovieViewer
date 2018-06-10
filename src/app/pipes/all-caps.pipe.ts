import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'allCaps'})
export class AllCapsPipe implements PipeTransform {
  transform(word: string): string {
    return word.toUpperCase();
  }
}
