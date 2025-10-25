import Car from './Car.js';
import RandomMoveStrategy from './strategy/RandomMoveStrategy.js';

class CarFactory {
  static createCars(names) {
    const strategy = new RandomMoveStrategy();
    return names.map((name) => new Car(name, strategy));
  }
}

export default CarFactory;
