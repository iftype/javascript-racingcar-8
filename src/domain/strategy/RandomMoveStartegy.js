import { Random } from '@woowacourse/mission-utils';
import { MIN_RANGE, MAX_RANGE, RANDOM_VALUE } from '../../constants/setting.js';
import MoveStrategy from './MoveStartegy.js';

class RandomMoveStrategy extends MoveStrategy {
  move() {
    const randomNum = Random.pickNumberInRange(MIN_RANGE, MAX_RANGE);
    return randomNum >= RANDOM_VALUE;
  }
}
export default RandomMoveStrategy;
