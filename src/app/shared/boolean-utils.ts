import {Log} from 'ng2-logger';
import {loggerColors} from '../misc/logger-colors';

const log = Log.create('BooleanUtils');
log.color = loggerColors.utils;


export class BooleanUtils {

  static additionMod2(x: boolean, y: boolean): boolean {
    log.info('inside additionMod2', '(x,y) = (', x, y, ')');
    return (x || y) && !(x && y);
  }
}
