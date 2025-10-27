export const TEST_NAMES = 'pobi,woni,jun';
export const TEST_INPUT_NAMES = ['pobi', 'woni', 'jun'];
export const TEST_ROUNDS = 3;

export const MOCK_CARS = [
  {
    name: 'pobi',
    distance: 0,
  },
  {
    name: 'pobi',
    distance: 0,
  },
  {
    name: 'pobi',
    distance: 0,
  },
];

export const MOCK_RESULT_LOGS = [
  [
    { name: 'pobi', distance: 1 },
    { name: 'woni', distance: 1 },
    { name: 'jun', distance: 0 },
  ],
  [
    { name: 'pobi', distance: 2 },
    { name: 'woni', distance: 2 },
    { name: 'jun', distance: 0 },
  ],
  [
    { name: 'pobi', distance: 3 },
    { name: 'woni', distance: 3 },
    { name: 'jun', distance: 0 },
  ],
];
export const MOCK_RESULT_WINNERS = ['pobi', 'woni'];
export const MOCK_RACE_RESULT = {
  logs: MOCK_RESULT_LOGS,
  winners: MOCK_RESULT_WINNERS,
};
