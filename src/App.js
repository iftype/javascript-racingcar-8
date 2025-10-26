import InputView from './view/InputView.js';
import OutputView from './view/outputView.js';
import RacingView from './view/RacingView.js';

import RandomMoveStrategy from './domain/strategy/RandomMoveStrategy.js';
import CarFactory from './domain/CarFactory.js';
import RacingService from './service/RacingService.js';

import RacingController from './controller/RacingController.js';
import Validator from './utils/Validator.js';
import CarValidator from './validator/CarValidator.js';
import RoundsValidator from './validator/RoundsValidator.js';

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const racingView = new RacingView(inputView, outputView);

    const validator = new Validator();
    const carValidator = new CarValidator(validator);
    const roundsValidator = new RoundsValidator(validator);
    const strategy = new RandomMoveStrategy();
    const carFactory = new CarFactory(strategy);
    const racingService = new RacingService(carFactory, carValidator, roundsValidator);

    const racingController = new RacingController(racingService, racingView);

    await racingController.play();
  }
}

export default App;
