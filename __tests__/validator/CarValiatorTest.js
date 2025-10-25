import CarValidator from '../../src/validator/CarValidator.js';
import ERROR_MESSAGES from '../../src/constants/errorMessages.js';

describe('CarValidator 검사', () => {
  // Mock 함수의 호출 기록을 각 테스트 후 초기화합니다.
  describe('에러 던지는지 검사', () => {
    test.each([
      [
        ['a', 'a', 'b'],
        ['a', 'a'],
      ],
    ])('duplicate 입력: %s ,', (names) => {
      expect(() => CarValidator.duplicate(names)).toThrow(ERROR_MESSAGES.DUPLICATE);
    });
    test.each(['', ' '])('blank 입력: %s ,', (name) => {
      expect(() => CarValidator.blank(name)).toThrow(ERROR_MESSAGES.BLANK);
    });
    test.each(['iftype'])('length 입력: %s ,', (name) => {
      expect(() => CarValidator.length(name)).toThrow(ERROR_MESSAGES.LONG);
    });
    test.each(['토비,,음', '테스트#,'])('symbol 입력: %s ,', (name) => {
      expect(() => CarValidator.symbol(name)).toThrow(ERROR_MESSAGES.SYMBOL);
    });
  });

  describe('통과하는지검사', () => {
    test.each([
      [
        ['a', 'ab', 'b'],
        ['a', 'c'],
      ],
    ])('duplicate 입력: %s ,', (names) => {
      expect(() => CarValidator.duplicate(names)).not.toThrow();
    });
    test.each(['ifytpe'])('blank 입력: %s ,', (name) => {
      expect(() => CarValidator.blank(name)).not.toThrow();
    });
    test.each(['type'])('length 입력: %s ,', (name) => {
      expect(() => CarValidator.length(name)).not.toThrow();
    });
    test.each(['a', 'b'])('symbol 입력: %s ,', (name) => {
      expect(() => CarValidator.symbol(name)).not.toThrow();
    });
  });
});
