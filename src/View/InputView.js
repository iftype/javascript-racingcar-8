import { Console } from '@woowacourse/mission-utils';
import INFO_MESSAGES from '../constants/infoMessages.js';
import ERROR_MESSAGES from '../constants/errorMessages.js';

class InputView {
  async carNames() {
    try {
      this.userInputName = await Console.readLineAsync(INFO_MESSAGES.NAME);
      return this.userInputName;
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
