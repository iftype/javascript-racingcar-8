import Validator from '../../src/validator/Validatior';

describe('Validator 검사', () => {
  test.each([
    ['', true],
    [' ', true],
    ['TEMP', false],
  ])('isBlank 검사 "%s", 예상 결과:%s', (str, expected) => {
    expect(Validator.isBlank(str)).toBe(expected);
  });

  test.each([
    ['iftype', 5, true],
    ['test', 5, false],
  ])('isLong(str, max)검사 "%s" 길이: %s,예상 결과:%s', (str, max, expected) => {
    expect(Validator.isLong(str, max)).toBe(expected);
  });

  test.each([
    ['*', true],
    ['iftype', false],
  ])('isSymbol(str) 검사, %s ,예상 결과:%s', (str, expected) => {
    expect(Validator.isSymbol(str)).toBe(expected);
  });

  test.each([
    [-3, true],
    [3, false],
  ])('isNegative(num)검사, %s ,예상 결과:%s)', (num, expected) => {
    expect(Validator.isNegative(num)).toBe(expected);
  });

  test.each([
    ['3', true],
    ['-3', true],
    [0, true],
    ['0', true],
    ['음', false],
    ['', false],
    [' ', false],
    [undefined, false],
    ['\\n', false],
  ])('isConvertNumber(param)검사, %s ,예상 결과:%s)', (num, expected) => {
    expect(Validator.isConvertNumber(num)).toBe(expected);
  });
});
