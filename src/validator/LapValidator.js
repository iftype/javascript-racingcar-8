import ExceptionFactory from './ExceptionFactory.js';
import Validator from './Validatior.js';

class LapValidator {
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

  static negative(lap) {
    if (Validator.isNegative(lap)) {
      ExceptionFactory.negative();
    }
  }

  static validate(lap) {
    this.blank(lap);
    this.num(lap);
    this.negative(lap);
  }
}
export default LapValidator;
