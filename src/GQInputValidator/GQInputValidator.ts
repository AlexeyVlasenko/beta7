import {IGQValidationError, GQValidationError} from './index';
import _isEmpty from 'lodash.isempty';

class GQInputValidator {
  errors: IGQValidationError[] = [];

  addError(key: string, message: string): void {
    this.errors.push({key, message});
  }

  invalid(): boolean {
    return !_isEmpty(this.errors);
  }
  throw() {
    return new GQValidationError(this.errors);
  }
}

export default GQInputValidator;
