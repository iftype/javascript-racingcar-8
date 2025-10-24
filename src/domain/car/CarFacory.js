import Car from './Car.js';
import CarValidator from '../../validator/CarValidator.js';

class CarFactory {
  static create(name) {
    new CarValidator(name).validate();
    return new Car(name);
  }
}

export default CarFactory;
