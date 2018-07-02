function sum(a, b) {
  return a + b;
}


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test(" toEqual object assignment", () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("toBeUndefault ", () => {
  expect(undefined).toBeUndefined()
});

test("toBeNull", () => {
  expect(null).toBeNull();
});

test("toBeDefault", () => { 
  const name=0;
  expect(name).toBeDefined();
})

test("toBeTruthy", () => { 
  expect(0).not.toBeTruthy();

})

test("toBeFalsy", () => { 
  expect(0).toBeFalsy()
})

