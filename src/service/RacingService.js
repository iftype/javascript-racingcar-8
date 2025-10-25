import CarFactory from '../domain/CarFactory.js';
import Race from '../domain/Race.js';
import CarValidator from '../validator/CarValidator.js';
import RoundsValidator from '../validator/RoundsValidator.js';

class RacingService {
  run(nameString, rounds) {
    const race = new Race();
    const names = nameString.split(',').map((name) => name.trim());
    CarValidator.validate(names);
    RoundsValidator.validate(rounds);

    const carList = CarFactory.createCars(names);
    return race.start(carList, rounds);
  }
}
export default RacingService;
