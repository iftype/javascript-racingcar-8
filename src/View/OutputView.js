import { Console } from '@woowacourse/mission-utils';
import INFO_MESSAGES from '../constants/infoMessages.js';

class OutputView {
  printLogs(logs) {
    Console.print(INFO_MESSAGES.RESULT);
    logs.forEach((round) => {
      round.forEach((log) => {
        Console.print(`${log.name} : ${INFO_MESSAGES.DASH.repeat(log.distance)}`);
      });
      Console.print(INFO_MESSAGES.BLANK);
    });
  }

  printWinnerList(winnerList) {
    Console.print(`${INFO_MESSAGES.WINNER}${winnerList.join(INFO_MESSAGES.DELIM)}`);
  }
}

export default OutputView;
