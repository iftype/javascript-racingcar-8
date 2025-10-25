import ExceptionFactory from './ExceptionFactory.js';
import Validator from './Validator.js';

class RoundsValidator {
  static blank(rounds) {
    if (Validator.isBlank(rounds)) {
      ExceptionFactory.blank();
    }
  }

  static num(rounds) {
    if (!Validator.isConvertNumber(rounds)) {
      ExceptionFactory.num();
    }
  }

  static positive(rounds) {
    if (!Validator.isPositive(rounds, 2)) {
      ExceptionFactory.positive();
    }
  }

  static validate(rounds) {
    this.blank(rounds);
    this.num(rounds);
    this.positive(rounds);
  }
}
export default RoundsValidator;
