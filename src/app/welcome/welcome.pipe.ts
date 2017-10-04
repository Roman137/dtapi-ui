import {Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(message: string, username: string): any {
    if (message == null) {
      return null;
    }

    if (isNullOrUndefined(username)) {
      return message + 'mortal';
    }

    return message + username;
  }

}
