import { Console } from '@woowacourse/mission-utils';
import INFO_MESSAGES from '../constants/infoMessages.js';
import ERROR_MESSAGES from '../constants/errorMessages.js';

class Input {
  static async carName() {
    try {
      const name = await Console.readLineAsync(INFO_MESSAGES.NAME);
      return name;
    } catch (error) {
      throw new Error(ERROR_MESSAGES.INPUT);
    }
  }

  static async lapCount() {
    try {
      const lap = await Console.readLineAsync(INFO_MESSAGES.LAP);
      return lap;
    } catch (error) {
      throw new Error(ERROR_MESSAGES.INPUT);
    }
  }
}
export default Input;
