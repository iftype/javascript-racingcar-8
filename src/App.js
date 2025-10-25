import InputView from './view/InputView.js';
import OutputView from './view/outputView.js';
import RacingView from './view/RacingView.js';
import RacingController from './controller/RacingController.js';
import RacingService from './service/RacingService.js';

class App {
  async run() {
    // 파사드 패턴
    const inputView = new InputView();
    const outputView = new OutputView();
    const racingView = new RacingView(inputView, outputView);

    const racingService = new RacingService();
    const racingController = new RacingController(racingService, racingView);

    await racingController.play();
  }
}

export default App;
