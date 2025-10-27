class MoveStrategy {
  constructor() {
    if (new.target === MoveStrategy) {
      throw new Error('MoveStrategy를 상속받아야합니다');
    }
  }

  move() {
    throw new Error('메소드가 구현 전입니다');
  }
}
export default MoveStrategy;
