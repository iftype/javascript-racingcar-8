import Car from './Car.js';

class CarFactory {
  constructor(strategy) {
    this.strategy = strategy;
  }

  createCars(names) {
    return names.map((name) => new Car(name, this.strategy));
  }
}

export default CarFactory;
