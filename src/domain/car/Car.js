class Car {
  #name;
  #lap = 0;

  constructor(name) {
    this.#name = name;
  }

  move(strategy) {
    if (strategy) {
      this.#lap += 1;
      return true;
    }
    return false;
  }

  getData() {
    return {
      name: this.#name,
      lap: this.#lap,
    };
  }
}
export default Car;
