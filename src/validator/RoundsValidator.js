import ExceptionFactory from './ExceptionFactory.js';
import Validator from './Validator.js';

class RoundsValidator {
  static blank(lap) {
    if (Validator.isBlank(lap)) {
      ExceptionFactory.blank();
    }
  }

  static num(lap) {
    if (!Validator.isConvertNumber(lap)) {
      ExceptionFactory.num();
    }
  }

  static positive(lap) {
    if (!Validator.isPositive(lap, 2)) {
      ExceptionFactory.positive();
    }
  }

  static validate(lap) {
    this.blank(lap);
    this.num(lap);
    this.positive(lap);
  }
}
export default RoundsValidator;
