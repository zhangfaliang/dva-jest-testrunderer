const bestLaCroixFlavor = () => {
  return "grapefruit";
};
expect.extend({
  toBeDivisibleBy(received, argument) {
    const pass = (received % argument == 0);
    if (pass) {
      return {
        message: () => (
          `expected ${received} not to be divisible by ${argument}`
        ),
        pass: true,
      };
    } else {
      return {
        message: () => (`expected ${received} to be divisible by ${argument}`),
        pass: false,
      };
    }
  },
});

describe("", () => {
  test("", () => {
    expect(bestLaCroixFlavor()).toBe("grapefruit");
  });
  test('event and odd number', () => { 
    expect(100).toBeDivisibleBy(2);
    expect(100).toBeDivisibleBy(6);
  })
});
