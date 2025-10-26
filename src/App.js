import InputView from './view/InputView.js';
import OutputView from './view/outputView.js';
import RacingView from './view/RacingView.js';
import RacingController from './controller/RacingController.js';
import RacingService from './service/RacingService.js';
import RandomMoveStrategy from './domain/strategy/RandomMoveStrategy.js';
import CarFactory from './domain/CarFactory.js';

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const racingView = new RacingView(inputView, outputView);

    const strategy = new RandomMoveStrategy();
    const carFactory = new CarFactory(strategy);

    const racingService = new RacingService(carFactory);
    const racingController = new RacingController(racingService, racingView);

    await racingController.play();
  }
}

export default App;
