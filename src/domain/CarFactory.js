import Car from './Car.js';
import RandomMoveStrategy from './strategy/RandomMoveStrategy.js';

class CarFactory {
  static createCars(nameList) {
    const strategy = new RandomMoveStrategy();
    return nameList.map((name) => new Car(name, strategy));
  }
}

export default CarFactory;
