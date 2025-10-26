class Validator {
  static isBlank(str) {
    return str.trim() === '';
  }

  static isLongerThan(str, max) {
    return str.length > max;
  }

  static isGreaterThan(num, target) {
    return num > target;
  }

  static isSymbol(str) {
    return !/^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/.test(str);
  }

  static isPositive(num) {
    return num > 0;
  }

  static isNegative(num) {
    return num < 0;
  }

  static isConvertNumber(param) {
    if (param === null || typeof param === 'undefined') {
      return false;
    }
    const strValue = String(param).trim();
    if (strValue === '') {
      return false;
    }
    if (Number.isNaN(Number(strValue))) {
      return false;
    }
    return true;
  }
}
export default Validator;
