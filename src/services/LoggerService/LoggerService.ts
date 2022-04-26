import winston, {Logger} from 'winston';
import {ILoggerService} from '@services';
import TransportStream from 'winston-transport';
// @ts-ignore
import GelfTransport from 'winston-gelf';

class LoggerService {
  logger: Logger;

  constructor(data: ILoggerService) {
    const transports: TransportStream[] = [new winston.transports.Console()];

    if (data.gelf) {
      const gelfTransport = new GelfTransport({
        gelfPro: {
          fields: {
            environment: data.gelf.environment,
            environment_name: data.gelf.environment_name,
            service_name: data.gelf.service_name,
            service_version: data.gelf.service_version,
          },
          adapterName: 'udp',
          adapterOptions: {
            host: data.gelf.host,
            port: data.gelf.port,
            protocol: 'udp4',
          },
        },
      });

      transports.push(gelfTransport);
    }

    this.logger = winston.createLogger({
      transports,
    });

    this.logger.on('error', (error) => {
      console.error('Error in logger caught', error);
    });
  }

  info(message: string, meta?: any) {
    this.logger.info(message, meta);
  }

  warn(message: string, meta?: any) {
    this.logger.warn(message, meta);
  }

  error(message: string, meta?: any) {
    this.logger.error(message, meta);
  }
}

export default LoggerService;
