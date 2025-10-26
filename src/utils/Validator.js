class Validator {
  isBlank(str) {
    return str.trim() === '';
  }

  isLongerThan(str, max) {
    return str.length > max;
  }

  isGreaterThan(num, target) {
    return num > target;
  }

  isSymbol(str) {
    return !/^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/.test(str);
  }

  isPositive(num) {
    return num > 0;
  }

  isNegative(num) {
    return num < 0;
  }

  isConvertNumber(param) {
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
