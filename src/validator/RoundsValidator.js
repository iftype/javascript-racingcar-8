import { ERROR_MESSAGES } from '../constants/messages.js';

class RoundsValidator {
  constructor(validator) {
    this.validator = validator;
  }

  blank(rounds) {
    if (this.validator.isBlank(rounds)) {
      throw new Error(ERROR_MESSAGES.BLANK);
    }
  }

  num(rounds) {
    if (!this.validator.isConvertNumber(rounds)) {
      throw new Error(ERROR_MESSAGES.NUM);
    }
  }

  positive(rounds) {
    if (!this.validator.isPositive(rounds, 2)) {
      throw new Error(ERROR_MESSAGES.POSITIVE);
    }
  }

  validate(rounds) {
    this.blank(rounds);
    this.num(rounds);
    this.positive(rounds);
  }
}
export default RoundsValidator;
