import ERROR_MESSAGES from '../constants/errorMessages.js';

class CarValidator {
  constructor(validator) {
    this.validator = validator;
  }

  blank(name) {
    if (this.validator.isBlank(name)) {
      throw new Error(ERROR_MESSAGES.BLANK);
    }
  }

  length(name) {
    if (this.validator.isLongerThan(name, 5)) {
      throw new Error(ERROR_MESSAGES.LONG);
    }
  }

  symbol(name) {
    if (this.validator.isSymbol(name)) {
      throw new Error(ERROR_MESSAGES.SYMBOL);
    }
  }

  duplicate(names) {
    const deleteDuplicate = new Set(names);
    if (deleteDuplicate.size !== names.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE);
    }
  }

  validate(names) {
    this.duplicate(names);
    names.forEach((name) => {
      this.blank(name);
      this.length(name);
      this.symbol(name);
    });
  }
}
export default CarValidator;
