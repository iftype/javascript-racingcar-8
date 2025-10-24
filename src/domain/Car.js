class Car {
  #name;
  #distance = 0;
  #strategy;

  constructor(name, strategy) {
    this.#name = name;
    this.#strategy = strategy;
  }

  move() {
    if (this.#strategy.move()) {
      this.#distance += 1;
      return true;
    }
    return false;
  }

  getData() {
    return {
      name: this.#name,
      distance: this.#distance,
    };
  }
}
export default Car;
