import InputView from '../../src/view/InputView';
import { MissionUtils } from '@woowacourse/mission-utils';
import { TEST_INPUT_NAMES, TEST_NAMES, TEST_ROUNDS } from '../../src/constants/Mockdata.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('InputView 테스트', () => {
  let mockView;
  beforeEach(() => {
    jest.clearAllMocks();
    mockView = new InputView();
  });

  test('carNames 반환체크', async () => {
    mockQuestions([TEST_NAMES]);
    const userInput = await mockView.carNames();
    expect(userInput).toEqual(TEST_INPUT_NAMES);
  });

  test('rounds 반환체크', async () => {
    mockQuestions([TEST_ROUNDS]);
    const userInput = await mockView.rounds();
    expect(userInput).toEqual(TEST_ROUNDS);
  });
});
