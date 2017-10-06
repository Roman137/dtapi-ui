import {Log} from 'ng2-logger';
import {Logger} from 'ng2-logger/src/logger';
import {loggerColors} from './logger-colors';

const log = Log.create('LoggerFactory');

export const createLogger = (forClass: Function): Logger<any> => {
  const logger = Log.create(forClass.name);
  const classType = forClass.name.split(/(?=[A-Z])/).pop();
  logger.color = correspondingColor(classType);
  log.color = logger.color;
  log.info(forClass.name, {type: classType, forClass: forClass}).color = logger.color;
  return logger;
};

const correspondingColor = (classType: string) => {
  return loggerColors[classType.toLowerCase()];
};

