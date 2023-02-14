import { CustomError } from 'ts-custom-error';

export class UserAlreadyExistsError extends CustomError {
  constructor(public code: number, message: string) {
    super(message);
  }
}
