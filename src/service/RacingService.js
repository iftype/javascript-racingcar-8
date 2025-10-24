import CarFactory from '../domain/CarFacory.js';
import Race from '../domain/Race.js';
import CarValidator from '../validator/CarValidator.js';
import RoundsValidator from '../validator/RoundsValidator.js';

class RacingService {
  constructor() {
    this.race = new Race();
  }

  run(nameString, rounds) {
    const nameList = nameString.split(',').map((name) => name.trim());
    CarValidator.validate(nameList);
    RoundsValidator.validate(rounds);

    const carList = CarFactory.createCars(nameList);
    return this.race.start(carList, rounds);
  }
}
export default RacingService;
