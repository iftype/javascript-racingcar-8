class Race {
  static start(carList, rounds) {
    const logs = [];
    for (let round = 0; round < rounds; round += 1) {
      const roundResult = Race.racing(carList);
      logs.push(roundResult);
    }
    const winners = Race.findWinner(logs);
    return { logs, winners };
  }

  static racing(carList) {
    const roundResult = [];
    carList.forEach((car) => {
      car.move();
      const { name, distance } = car.getData();
      roundResult.push({ name, distance });
    });
    return roundResult;
  }

  static findWinner(logs) {
    const lastLog = logs[logs.length - 1];

    const distances = lastLog.map((log) => log.distance);
    const winnerDistance = Math.max(...distances);

    return lastLog.filter((log) => log.distance >= winnerDistance).map((log) => log.name);
  }
}
export default Race;
