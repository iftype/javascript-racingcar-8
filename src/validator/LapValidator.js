import ExceptionFactory from './ExceptionFactory.js';
import Validator from './Validatior.js';

class LapValidator {
  constructor(lap) {
    this.lap = lap;
  }

  blank() {
    if (Validator.isBlank(this.lap)) {
      ExceptionFactory.blank();
    }
    return this;
  }

  num() {
    if (!Validator.isConvertNumber(this.lap)) {
      ExceptionFactory.num();
    }
    return this;
  }

  negative() {
    if (Validator.isNegative(this.lap)) {
      ExceptionFactory.negative();
    }
    return this;
  }

  lapValidate() {
    this.blank().num().negative();
  }
}
export default LapValidator;
