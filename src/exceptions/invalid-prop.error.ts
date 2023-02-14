import { CustomError } from 'ts-custom-error';

export class InvalidPropertyError extends CustomError {
  constructor(public code: number, message: string) {
    super(message);
  }
}
