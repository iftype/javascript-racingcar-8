import ExceptionFactory from './ExceptionFactory.js';
import Validator from './Validatior.js';

class CarValidator {
  constructor(name) {
    this.name = name;
  }

  blank() {
    if (Validator.isBlank(this.name)) {
      ExceptionFactory.blank();
    }
    return this;
  }

  length() {
    if (Validator.isLong(this.name, 5)) {
      ExceptionFactory.long();
    }
    return this;
  }

  symbol() {
    if (Validator.isSymbol(this.name)) {
      ExceptionFactory.symbol();
    }
    return this;
  }

  validate() {
    this.blank().length().symbol();
  }
}
export default CarValidator;
