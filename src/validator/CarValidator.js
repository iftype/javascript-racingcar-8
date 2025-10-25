import ExceptionFactory from './ExceptionFactory.js';
import Validator from './Validator.js';

class CarValidator {
  static blank(name) {
    if (Validator.isBlank(name)) {
      ExceptionFactory.blank();
    }
  }

  static length(name) {
    if (Validator.isLongerThan(name, 5)) {
      ExceptionFactory.long();
    }
  }

  static symbol(name) {
    if (Validator.isSymbol(name)) {
      ExceptionFactory.symbol();
    }
  }

  static duplicate(names) {
    const deleteDuplicate = new Set(names);
    if (deleteDuplicate.size !== names.length) ExceptionFactory.duplicate();
  }

  static validate(names) {
    this.duplicate(names);
    names.forEach((name) => {
      this.blank(name);
      this.length(name);
      this.symbol(name);
    });
  }
}
export default CarValidator;
