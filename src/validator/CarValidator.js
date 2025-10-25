import ExceptionFactory from './ExceptionFactory.js';
import Validator from './Validator.js';

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

  static duplicate(nameList) {
    const deleteDuplicate = new Set(nameList);
    if (deleteDuplicate.size !== nameList.length) ExceptionFactory.duplicate();
  }

  static validate(nameList) {
    this.duplicate(nameList);
    nameList.forEach((name) => {
      this.blank(name);
      this.length(name);
      this.symbol(name);
    });
  }
}
export default CarValidator;
