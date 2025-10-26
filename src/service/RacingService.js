class RacingService {
  constructor(carFactory, racingValidator, Race) {
    this.carFactory = carFactory;
    this.racingValidator = racingValidator;
    this.Race = Race;
  }

  run(nameString, rounds) {
    const names = nameString.split(',').map((name) => name.trim());
    this.racingValidator.validate(names, rounds);

    const cars = this.carFactory.createCars(names);
    const race = new this.Race(cars, rounds);
    return race.start();
  }
}
export default RacingService;
