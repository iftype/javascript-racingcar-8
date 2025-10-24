import ExceptionFactory from '../../src/domain/validator/ExceptionFactory.js';
import ERROR_MESSAGES from '../../src/constants/errorMessages.js';

describe('ExceptionFactory instance Test', () => {
  it('추상 클래스 직접 생성 시 에러', () => {
    expect(() => new ExceptionFactory()).toThrow(ERROR_MESSAGES.ABSTRACT);
  });
});

describe('ExceptionFactory method test', () => {
  const cases = [
    [ExceptionFactory.blank.name, ExceptionFactory.blank, ERROR_MESSAGES.BLANK],
    [ExceptionFactory.long.name, ExceptionFactory.long, ERROR_MESSAGES.LONG],
    [ExceptionFactory.duplicate.name, ExceptionFactory.duplicate, ERROR_MESSAGES.DUPLICATE],
    [ExceptionFactory.symbol.name, ExceptionFactory.symbol, ERROR_MESSAGES.SYMBOL],
    [ExceptionFactory.num.name, ExceptionFactory.num, ERROR_MESSAGES.NUM],
    [ExceptionFactory.negative.name, ExceptionFactory.negative, ERROR_MESSAGES.NEGATIVE],
  ];
  it.each(cases)('%s 테스트 시작,%s는 %s를 포함해야합니다', (_, method, expected) => {
    expect(method).toThrow(expected);
  });
});
