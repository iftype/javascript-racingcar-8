import Car from '../../src/domain/Car.js';
import MoveStrategy from '../../src/domain/strategy/MoveStrategy.js';

class TestStrategy extends MoveStrategy {
  constructor() {
    super();
  }
  move = jest.fn();
}

describe('Car 테스트 ', () => {
  let testStrategy;
  let testCar;

  beforeEach(() => {
    testStrategy = new TestStrategy();
    testCar = new Car('testCar', testStrategy);
  });

  test('move 성공 테스트', () => {
    testStrategy.move.mockReturnValue(true);
    testCar.move();
    expect(testCar.getData().distance).toBe(1);
  });

  test('move 실패 테스트', () => {
    testStrategy.move.mockReturnValue(false);
    testCar.move();
    expect(testCar.getData().distance).toBe(0);
  });
});
