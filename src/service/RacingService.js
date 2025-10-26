import Race from '../domain/Race.js';
import CarValidator from '../validator/CarValidator.js';
import RoundsValidator from '../validator/RoundsValidator.js';

class RacingService {
  constructor(carFactory) {
    this.carFactory = carFactory;
  }

  run(nameString, rounds) {
    const names = nameString.split(',').map((name) => name.trim());
    CarValidator.validate(names);
    RoundsValidator.validate(rounds);

    const carList = this.carFactory.createCars(names);
    return Race.start(carList, rounds);
  }
}
export default RacingService;
