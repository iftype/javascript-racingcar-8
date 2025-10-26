class RacingService {
  constructor(carFactory, racingValidator, Race) {
    this.carFactory = carFactory;
    this.racingValidator = racingValidator;
    this.Race = Race;
  }

  run(names, rounds) {
    this.racingValidator.validate(names, rounds);
    const cars = this.carFactory.createCars(names);
    const race = new this.Race(cars, rounds);
    return race.start();
  }
}
export default RacingService;
