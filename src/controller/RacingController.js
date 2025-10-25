class RacingController {
  constructor(racingService, racingView) {
    this.racingService = racingService;
    this.racingView = racingView;
  }

  async play() {
    try {
      const nameString = await this.racingView.inputCarNames();
      const rounds = await this.racingView.inputCounts();

      const { logs, winners } = this.racingService.run(nameString, rounds);
      this.racingView.printLogs(logs);
      this.racingView.printWinners(winners);
    } catch (err) {
      throw new Error(`[ERROR] ${err.message}`);
    }
  }
}

export default RacingController;
