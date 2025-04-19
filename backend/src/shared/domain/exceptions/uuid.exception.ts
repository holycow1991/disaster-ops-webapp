import { Exception } from './exception';

export class InvalidUUIDException extends Exception {
  constructor(id: string) {
    super(`${id} is not a valid UUID`);
    this.name = this.constructor.name;
  }
}
