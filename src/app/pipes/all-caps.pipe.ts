import {Pipe, PipeTransform} from '@angular/core';

// Convert string to upperCase string
@Pipe({name: 'allCaps'})
export class AllCapsPipe implements PipeTransform {
  transform(word: string): string {
    return word.toUpperCase();
  }
}
