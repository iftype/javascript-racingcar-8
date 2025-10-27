class RacingValidator {
  constructor({ carValidator, roundsValidator }) {
    this.carValidator = carValidator;
    this.roundsValidator = roundsValidator;
  }

  validate(names, rounds) {
    this.carValidate(names);
    this.roundsValidate(rounds);
  }

  carValidate(names) {
    return this.carValidator.validate(names);
  }

  roundsValidate(rounds) {
    return this.roundsValidator.validate(rounds);
  }
}
export default RacingValidator;
