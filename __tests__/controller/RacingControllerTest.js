import RacingController from '../../src/controller/RacingController';
import {
  MOCK_RACE_RESULT,
  TEST_INPUT_NAMES,
  TEST_ROUNDS,
  MOCK_RESULT_LOGS,
  MOCK_RESULT_WINNERS,
} from '../../src/constants/Mockdata.js';

describe('RacingController 테스트', () => {
  let mockService;
  let mockView;
  let controller;

  beforeEach(() => {
    jest.clearAllMocks();

    mockView = {
      inputCarNames: jest.fn().mockResolvedValue(TEST_INPUT_NAMES),
      inputCounts: jest.fn().mockResolvedValue(TEST_ROUNDS),
      printLogs: jest.fn(),
      printWinners: jest.fn(),
    };
    mockService = {
      run: jest.fn().mockReturnValue(MOCK_RACE_RESULT),
    };
    controller = new RacingController({ racingService: mockService, racingView: mockView });
  });

  test('컨트롤러는 반환값 확인X 전달만 체크', async () => {
    await controller.start();
    expect(mockView.inputCarNames).toHaveBeenCalledTimes(1);
    expect(mockView.inputCounts).toHaveBeenCalledTimes(1);
    expect(mockService.run).toHaveBeenCalledTimes(1);
    expect(mockView.printLogs).toHaveBeenCalledTimes(1);
    expect(mockView.printWinners).toHaveBeenCalledTimes(1);

    expect(mockService.run).toHaveBeenCalledWith(TEST_INPUT_NAMES, TEST_ROUNDS);
    expect(mockView.printLogs).toHaveBeenCalledWith(MOCK_RESULT_LOGS);
    expect(mockView.printWinners).toHaveBeenCalledWith(MOCK_RESULT_WINNERS);
  });
});
