import ExceptionFactory from '../../validator/ExceptionFactory.js';

class MoveStrategy {
  constructor() {
    if (new.target === ExceptionFactory) {
      ExceptionFactory.abstract();
    }
  }

  move() {
    ExceptionFactory.abstractMethod();
  }
}
export default MoveStrategy;
