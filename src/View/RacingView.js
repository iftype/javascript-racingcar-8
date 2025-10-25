class RacingView {
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  // input
  inputCarNames() {
    return this.inputView.carNames();
  }

  inputCounts() {
    return this.inputView.rounds();
  }

  // output
  printLogs(logs) {
    return this.outputView.logs(logs);
  }

  printWinners(winners) {
    return this.outputView.winners(winners);
  }
}
export default RacingView;
