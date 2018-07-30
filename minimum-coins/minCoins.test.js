const minCoins = require('./minCoins');

it('should return 0 when no coins are needed', () => {
  expect(minCoins(0)).toBe(0);
});

it('should return 1 when only 1 coin is needed', () => {
  expect(minCoins(1)).toBe(1);
  expect(minCoins(2)).toBe(1);
});

it('should be able to handle more complex scenarios', () => {
  expect(minCoins(1.20)).toBe(2);
  expect(minCoins(1.25)).toBe(3);
  expect(minCoins(3.83)).toBe(7);
  expect(minCoins(11.72)).toBe(9);
});
