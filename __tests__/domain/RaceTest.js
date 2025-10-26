import Race from '../../src/domain/Race.js';

describe('Race 테스트 ', () => {
  test('move 성공 테스트', () => {
    const testCars = [
      {
        name: 'a',
        distance: 0,
        move() {
          this.distance += 1;
        },
        getData() {
          return { name: this.name, distance: this.distance };
        },
      },
      {
        name: 'b',
        distance: 0,
        move() {
          this.distance += 1;
        },
        getData() {
          return { name: this.name, distance: this.distance };
        },
      },
    ];
    const rounds = 2;
    const result = {
      logs: [
        [
          { name: 'a', distance: 1 },
          { name: 'b', distance: 1 },
        ],
        [
          { name: 'a', distance: 2 },
          { name: 'b', distance: 2 },
        ],
      ],
      winners: ['a', 'b'],
    };
    expect(Race.start(testCars, rounds)).toEqual(result);
  });
});
