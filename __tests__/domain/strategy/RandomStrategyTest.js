import { MissionUtils } from '@woowacourse/mission-utils';
import RandomMoveStrategy from '../../../src/domain/strategy/RandomMoveStrategy.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('RandomMoveStrategy 테스트', () => {
  const strategy = new RandomMoveStrategy();

  test('move 성공 테스트', () => {
    mockRandoms([4]);
    expect(strategy.move()).toBe(true);
  });

  test('move 실패 테스트', () => {
    mockRandoms([3]);
    expect(strategy.move()).toBe(false);
  });
});
