import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGES } from '../constants/messages.js';

class OutputView {
  logs(logs) {
    Console.print(INFO_MESSAGES.RESULT);
    logs.forEach((round) => {
      round.forEach((log) => {
        Console.print(`${log.name} : ${INFO_MESSAGES.DASH.repeat(log.distance)}`);
      });
      Console.print(INFO_MESSAGES.BLANK);
    });
  }

  winners(winnerList) {
    Console.print(`${INFO_MESSAGES.WINNER}${winnerList.join(INFO_MESSAGES.DELIM)}`);
  }
}

export default OutputView;
