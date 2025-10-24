import { Random } from '@woowacourse/mission-utils';
import { MIN_RANGE, MAX_RANGE, MAX_NAME_LENGTH } from '../../constants/setting';

class RandomMoveStrategy {
  static move() {
    const randomNum = Random.pickNumberInRange(MIN_RANGE, MAX_RANGE);
    return randomNum >= MAX_NAME_LENGTH;
  }
}
export default RandomMoveStrategy;
