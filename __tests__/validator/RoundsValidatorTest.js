import RoundsValidator from '../../src/validator/RoundsValidator.js';
import ERROR_MESSAGES from '../../src/constants/errorMessages.js';

describe('RoundsValidator 검사', () => {
  let mockValidator;
  let roundsValidator;

  beforeEach(() => {
    mockValidator = {
      isBlank: jest.fn(),
      isConvertNumber: jest.fn(),
      isPositive: jest.fn(),
    };
    roundsValidator = new RoundsValidator(mockValidator);
    jest.clearAllMocks();
  });

  describe('에러 던지는지 검사', () => {
    test.each(['', ' '])('blank 입력: %s ,', (rounds) => {
      mockValidator.isBlank.mockReturnValue(true);
      expect(() => roundsValidator.blank(rounds)).toThrow(ERROR_MESSAGES.BLANK);
    });
    test.each(['iftype', '', null, undefined])('num 입력: %s ,', (rounds) => {
      mockValidator.isConvertNumber.mockReturnValue(false);
      expect(() => roundsValidator.num(rounds)).toThrow(ERROR_MESSAGES.NUM);
    });
    test.each(['-3'])('positive 입력: %s ,', (rounds) => {
      mockValidator.isPositive.mockReturnValue(false);
      expect(() => roundsValidator.positive(rounds)).toThrow(ERROR_MESSAGES.POSITIVE);
    });
  });

  describe('통과 검사', () => {
    test.each(['t', 'to'])('blank 입력: %s ,', (rounds) => {
      mockValidator.isBlank.mockReturnValue(false);
      expect(() => roundsValidator.blank(rounds)).not.toThrow();
    });
    test.each(['0', '3', 1])('num 입력: %s ,', (rounds) => {
      mockValidator.isConvertNumber.mockReturnValue(true);
      expect(() => roundsValidator.num(rounds)).not.toThrow();
    });
    test.each(['3'])('positive 입력: %s ,', (rounds) => {
      mockValidator.isPositive.mockReturnValue(true);
      expect(() => roundsValidator.positive(rounds)).not.toThrow();
    });
  });
});
