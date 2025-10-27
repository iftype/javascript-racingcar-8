import Car from '../../src/domain/Car';
import CarFactory from '../../src/domain/CarFactory';
import MoveStrategy from '../../src/domain/strategy/MoveStrategy';

class MockStrategy extends MoveStrategy {
  constructor() {
    super();
  }
}
describe('CarFactory 검사', () => {
  let mockStrategy;
  let mockFactory;
  beforeEach(() => {
    jest.clearAllMocks();
    mockStrategy = new MockStrategy();
    mockFactory = new CarFactory({ strategy: mockStrategy });
  });

  test('생성되는지 테스트', () => {
    const newCar = mockFactory.createCars(['a'])[0];
    expect(newCar).toBeInstanceOf(Car);
  });
});
