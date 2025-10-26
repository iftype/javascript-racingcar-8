class MoveStrategy {
  constructor() {
    if (new.target === MoveStrategy) {
      MoveStrategy.abstract();
    }
  }

  move() {
    MoveStrategy.abstractMethod();
  }
}
export default MoveStrategy;
