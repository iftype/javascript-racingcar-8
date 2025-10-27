import RacingService from '../../src/service/RacingService.js';
import {
  TEST_INPUT_NAMES,
  TEST_ROUNDS,
  MOCK_CARS,
  MOCK_RACE_RESULT,
} from '../../src/constants/Mockdata.js';

describe('RacingService 유닛테스트', () => {
  let mockFactory;
  let mockValidator;
  let MockRaceClass;
  let service;

  beforeEach(() => {
    jest.clearAllMocks();
    mockFactory = { createCars: jest.fn().mockReturnValue(MOCK_CARS) };
    mockValidator = { validate: jest.fn() };
    MockRaceClass = jest.fn().mockImplementation(() => {
      return { start: jest.fn().mockReturnValue(MOCK_RACE_RESULT) };
    });
    service = new RacingService(mockFactory, mockValidator, MockRaceClass);
  });

  test('호출 결과 테스트', () => {
    const result = service.run(TEST_INPUT_NAMES, TEST_ROUNDS);
    expect(mockValidator.validate).toHaveBeenCalledWith(TEST_INPUT_NAMES, TEST_ROUNDS);
    expect(mockFactory.createCars).toHaveBeenCalledWith(TEST_INPUT_NAMES);
    expect(MockRaceClass).toHaveBeenCalledWith(MOCK_CARS, TEST_ROUNDS);

    //클래스 생성 후 start 됐는지
    const MockCars = MockRaceClass.mock.results[0].value;
    expect(MockCars.start).toHaveBeenCalledTimes(1);
    expect(result).toEqual(MOCK_RACE_RESULT);
  });
});
