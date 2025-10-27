import MoveStrategy from './strategy/MoveStrategy.js';

class Car {
  #name;
  #distance = 0;
  #strategy;

  constructor(name, strategy) {
    if (!(strategy instanceof MoveStrategy)) {
      throw new Error('잘못된 전략 조건입니다');
    }
    this.#name = name;
    this.#strategy = strategy;
  }

  move() {
    if (this.#strategy.move()) {
      this.#distance += 1;
      return true;
    }
    return false;
  }

  getData() {
    return {
      name: this.#name,
      distance: this.#distance,
    };
  }
}
export default Car;
