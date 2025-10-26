class Race {
  constructor(cars, rounds) {
    this.cars = cars;
    this.rounds = rounds;
    this.logs = [];
  }

  start() {
    for (let round = 0; round < this.rounds; round += 1) {
      this.logs.push(this.racing());
    }
    const winners = this.findWinner(this.logs);
    return { logs: this.logs, winners };
  }

  racing() {
    return this.cars.map((car) => {
      car.move();
      return car.getData();
    });
  }

  findWinner() {
    const lastLog = this.logs[this.logs.length - 1];

    const distances = lastLog.map((log) => log.distance);
    const winnerDistance = Math.max(...distances);

    return lastLog.filter((log) => log.distance >= winnerDistance).map((log) => log.name);
  }
}
export default Race;
