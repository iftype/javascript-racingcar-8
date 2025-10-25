import RoundsValidator from '../../src/validator/RoundsValidator.js';
import ERROR_MESSAGES from '../../src/constants/errorMessages.js';

describe('RoundsValidator 검사', () => {
  // Mock 함수의 호출 기록을 각 테스트 후 초기화합니다.
  describe('에러 던지는지 검사', () => {
    test.each(['', ' '])('blank 입력: %s ,', (rounds) => {
      expect(() => RoundsValidator.blank(rounds)).toThrow(ERROR_MESSAGES.BLANK);
    });
    test.each(['iftype', '', null, undefined])('num 입력: %s ,', (rounds) => {
      expect(() => RoundsValidator.num(rounds)).toThrow(ERROR_MESSAGES.NUM);
    });
    test.each(['-3'])('positive 입력: %s ,', (rounds) => {
      expect(() => RoundsValidator.positive(rounds)).toThrow(ERROR_MESSAGES.POSITIVE);
    });
  });

  describe('통과 검사', () => {
    test.each(['t', 'to'])('blank 입력: %s ,', (rounds) => {
      expect(() => RoundsValidator.blank(rounds)).not.toThrow();
    });
    test.each(['0', '3', 1])('num 입력: %s ,', (rounds) => {
      expect(() => RoundsValidator.num(rounds)).not.toThrow();
    });
    test.each(['3'])('positive 입력: %s ,', (rounds) => {
      expect(() => RoundsValidator.positive(rounds)).not.toThrow();
    });
  });
});
