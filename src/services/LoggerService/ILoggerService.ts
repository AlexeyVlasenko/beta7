import {IGelf} from '@services';

export default interface ILoggerService {
  nodeID: string;
  transportOpts?: any;
  gelf?: IGelf;
}
