import RacingService from '../service/RacingService.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class RacingController {
  constructor() {
    this.inputView = new InputView();
    this.racingService = new RacingService();
    this.outPutView = new OutputView();
  }

  async play() {
    try {
      const nameString = await this.inputView.carName();
      const rounds = await this.inputView.rounds();

      const { logs, winnerList } = this.racingService.run(nameString, rounds);
      this.outPutView.printLogs(logs);
      this.outPutView.printWinnerList(winnerList);
    } catch (err) {
      throw new Error(`[ERROR] ${err.message}`);
    }
  }
}

export default RacingController;
