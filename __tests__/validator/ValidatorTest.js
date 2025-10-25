import Validator from '../../src/validator/Validator';

describe('Validator 검사', () => {
  test.each([
    ['', true],
    [' ', true],
    ['TEMP', false],
  ])('isBlank(%s) 예상 결과:%s', (str, expected) => {
    expect(Validator.isBlank(str)).toBe(expected);
  });

  test.each([
    ['iftype', 5, true],
    ['iftype', 6, false],
    ['iftype', 7, false],
  ])('isLongerThan(%s, %s) 예상 결과:%s', (str, max, expected) => {
    expect(Validator.isLongerThan(str, max)).toBe(expected);
  });

  test.each([
    [6, 5, true],
    [5, 6, false],
    [4, 7, false],
  ])('isGreaterThan(%s, %s) 예상 결과:%s', (str, max, expected) => {
    expect(Validator.isGreaterThan(str, max)).toBe(expected);
  });

  test.each([
    ['', true],
    ['if-type', true],
    ['if/type', true],
    ['if type', true],
    ['iftype', false],
  ])('isSymbol(%s) 예상 결과:%s', (str, expected) => {
    expect(Validator.isSymbol(str)).toBe(expected);
  });

  test.each([
    [-3, false],
    [3, true],
  ])('isPositive(%s)검사 예상 결과:%s)', (num, expected) => {
    expect(Validator.isPositive(num)).toBe(expected);
  });

  test.each([
    [-3, true],
    [3, false],
  ])('isNegative(%s)검사 예상 결과:%s)', (num, expected) => {
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
    [NaN, false],
    ['\\n', false],
  ])('isConvertNumber(param)검사, %s ,예상 결과:%s)', (num, expected) => {
    expect(Validator.isConvertNumber(num)).toBe(expected);
  });
});
