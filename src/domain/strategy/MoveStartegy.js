import ExceptionFactory from '../../validator/ExceptionFactory';

class MoveStrategy {
  constructor() {
    ExceptionFactory.abstract();
  }

  move() {
    ExceptionFactory.abstractMethod();
  }
}
export default MoveStrategy;
