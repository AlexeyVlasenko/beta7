// @ts-ignore peer-dependency
import {ApolloError} from 'apollo-server';
import {IGQValidationError} from './index';

class GQValidationError extends ApolloError {
  constructor(errors: IGQValidationError[]) {
    const errorsObject = errors.reduce<Record<string, string[]>>(
      (result, error: IGQValidationError) => {
        if (result[error.key]) {
          result[error.key].push(error.message);
        } else {
          result[error.key] = [error.message];
        }
        return result;
      },
      {},
    );

    super('VALIDATION_ERROR', '400', {errors: errorsObject});
  }
}

export default GQValidationError;
