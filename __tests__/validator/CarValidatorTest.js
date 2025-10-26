import CarValidator from '../../src/validator/CarValidator.js';
import ERROR_MESSAGES from '../../src/constants/errorMessages.js';

describe('CarValidator 검사', () => {
  let mockValidator;
  let carValidator;

  beforeEach(() => {
    mockValidator = {
      isBlank: jest.fn(),
      isLongerThan: jest.fn(),
      isSymbol: jest.fn(),
    };
    carValidator = new CarValidator(mockValidator);
    jest.clearAllMocks();
  });

  describe('에러 던지는지 검사', () => {
    test.each([
      [
        ['a', 'a', 'b'],
        ['a', 'a'],
      ],
    ])('duplicate 입력: %s ,', (names) => {
      expect(() => carValidator.duplicate(names)).toThrow(ERROR_MESSAGES.DUPLICATE);
    });
    test.each(['', ' '])('blank 입력: %s ,', (name) => {
      mockValidator.isBlank.mockReturnValue(true);
      expect(() => carValidator.blank(name)).toThrow(ERROR_MESSAGES.BLANK);
    });
    test.each(['iftype'])('length 입력: %s ,', (name) => {
      mockValidator.isLongerThan.mockReturnValue(true);
      expect(() => carValidator.length(name)).toThrow(ERROR_MESSAGES.LONG);
    });
    test.each(['토비,,음', '테스트#,'])('symbol 입력: %s ,', (name) => {
      mockValidator.isSymbol.mockReturnValue(true);
      expect(() => carValidator.symbol(name)).toThrow(ERROR_MESSAGES.SYMBOL);
    });
  });

  describe('통과하는지검사', () => {
    test.each([
      [
        ['a', 'ab', 'b'],
        ['a', 'c'],
      ],
    ])('duplicate 입력: %s ,', (names) => {
      expect(() => carValidator.duplicate(names)).not.toThrow();
    });
    test.each(['ifytpe'])('blank 입력: %s ,', (name) => {
      mockValidator.isBlank.mockReturnValue(false);
      expect(() => carValidator.blank(name)).not.toThrow();
    });
    test.each(['type'])('length 입력: %s ,', (name) => {
      mockValidator.isLongerThan.mockReturnValue(false);
      expect(() => carValidator.length(name)).not.toThrow();
    });
    test.each(['a', 'b'])('symbol 입력: %s ,', (name) => {
      mockValidator.isSymbol.mockReturnValue(false);
      expect(() => carValidator.symbol(name)).not.toThrow();
    });
  });
});
