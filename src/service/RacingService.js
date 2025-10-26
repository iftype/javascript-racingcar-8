import Race from '../domain/Race.js';

class RacingService {
  constructor(carFactory, racingValidator) {
    this.carFactory = carFactory;
    this.racingValidator = racingValidator;
  }

  run(nameString, rounds) {
    const names = nameString.split(',').map((name) => name.trim());
    this.racingValidator.validate(names, rounds);

    const cars = this.carFactory.createCars(names);
    return Race.start(cars, rounds);
  }
}
export default RacingService;
