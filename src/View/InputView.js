import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGES, ERROR_MESSAGES } from '../constants/messages.js';

class InputView {
  async carNames() {
    try {
      const userInput = await Console.readLineAsync(INFO_MESSAGES.NAME);
      const names = userInput.split(',').map((name) => name.trim());
      return names;
    } catch (error) {
      throw new Error(ERROR_MESSAGES.INPUT);
    }
  }

  async rounds() {
    try {
      const lap = await Console.readLineAsync(INFO_MESSAGES.ROUNDS);
      return lap;
    } catch (error) {
      throw new Error(ERROR_MESSAGES.INPUT);
    }
  }
}
export default InputView;
