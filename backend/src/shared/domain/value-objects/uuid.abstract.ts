import { validate } from 'uuid';
import { ValueObject } from './value-object.abstract';
import { InvalidUUIDException } from '../exceptions/uuid.exception';

interface Props {
  value: string;
}

export abstract class UUID extends ValueObject<Props> {
  protected constructor(id: string) {
    super({ value: id });
    this.validate(id);
  }

  validate(id: string) {
    if (!validate(this.props.value)) {
      throw new InvalidUUIDException(id);
    }
  }

  get value(): string {
    return this.props.value;
  }
}
