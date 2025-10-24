import ExceptionFactory from './ExceptionFactory.js';
import Validator from './Validatior.js';

class CarValidator {
  static blank(name) {
    if (Validator.isBlank(name)) {
      ExceptionFactory.blank();
    }
  }

  static length(name) {
    if (Validator.isLong(name, 5)) {
      ExceptionFactory.long();
    }
  }

  static symbol(name) {
    if (Validator.isSymbol(name)) {
      ExceptionFactory.symbol();
    }
  }

  static validate(name) {
    this.blank(name);
    this.length(name);
    this.symbol(name);
  }
}
export default CarValidator;
