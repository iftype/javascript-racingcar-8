import Race from '../domain/Race.js';

class RacingService {
  constructor(carFactory, carValidator, roundsValidator) {
    this.carFactory = carFactory;
    this.carValidator = carValidator;
    this.roundsValidator = roundsValidator;
  }

  run(nameString, rounds) {
    const names = nameString.split(',').map((name) => name.trim());
    this.carValidator.validate(names);
    this.roundsValidator.validate(rounds);

    const carList = this.carFactory.createCars(names);
    return Race.start(carList, rounds);
  }
}
export default RacingService;
