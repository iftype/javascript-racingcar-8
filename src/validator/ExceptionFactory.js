import ERROR_MESSAGES from '../constants/errorMessages.js';

class ExceptionFactory {
  constructor() {
    if (new.target === ExceptionFactory) {
      throw new Error(ERROR_MESSAGES.ABSTRACT);
    }
  }

  static blank() {
    throw new Error(ERROR_MESSAGES.BLANK);
  }

  static long() {
    throw new Error(ERROR_MESSAGES.LONG);
  }

  static greater() {
    throw new Error(ERROR_MESSAGES.GREATER);
  }

  static duplicate() {
    throw new Error(ERROR_MESSAGES.DUPLICATE);
  }

  static symbol() {
    throw new Error(ERROR_MESSAGES.SYMBOL);
  }

  static num() {
    throw new Error(ERROR_MESSAGES.NUM);
  }

  static positive() {
    throw new Error(ERROR_MESSAGES.POSITIVE);
  }

  static negative() {
    throw new Error(ERROR_MESSAGES.NEGATIVE);
  }

  static abstract() {
    throw new Error(ERROR_MESSAGES.ABSTRACT);
  }

  static abstractMethod() {
    throw new Error(ERROR_MESSAGES.ABSTRACT_METHOD);
  }

  static input() {
    throw new Error(ERROR_MESSAGES.INPUT);
  }
}
export default ExceptionFactory;
