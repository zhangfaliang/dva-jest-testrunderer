function sum(a, b) {
  return a + b;
}

 /**
 * === 值对比
 */
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

 /***
 /*  对象内同 key的value比较
 */  
// test(" toEqual object assignment", () => {
//   const data = { one: 1 };
//   data['two'] = 2;
//   expect(data).toEqual({ one: 1, two: 2 });
// });

/**
 * 对比 undefault default null  if(true/false)
 */

// test("toBeUndefault ", () => {
//   expect(undefined).toBeUndefined()
// });

// test("toBeNull", () => {
//   expect(null).toBeNull();
// });

// test("toBeDefault", () => { 
//   const name=0;
//   expect(name).toBeDefined();
// })

// test("toBeTruthy", () => { 
//   expect(0).not.toBeTruthy();

// })

// test("toBeFalsy", () => { 
//   expect(0).toBeFalsy()
// })

/**
 * 对比大于小于
 */ 
// test('toBeGreaterThan', () => { 
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(2);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5)
// })

/**
 * 对比浮点数
 */

// test("adding floating point numbers", () => { 
//   const value = 0.1 + 0.2;
//   expect(value).not.toBe(0.3);
//   expect(value).toBeCloseTo(0.3)
// })

 /**
 * 对比字符串
 */

// test("there is no I in team", () => { 
//   expect('team').not.toMatch(/I/);
// })

// test("but there is a 'stop' in Christoph", () => { 
//   expect('Christoph').toMatch(/stop/)
// })

/**
 * 检查数字包含特定的子项使用 toContain
 */

// const shoppingList = [
//   "diapers",
//   "kleenex",
//   "trash bags",
//   "paper towels",
//   "beer"
// ]
// test("the shopping list has beer on it ", () => { 
//   expect(shoppingList).toContain('beer')
// })

 /**
 * 如果你想测试的特定函数抛出一个错误， 在它调用时，使用 toThrow 。
 */

function compileAndroidCode() { 
  throw new ConfigError('you are using the wrong JDK');
}

// test('compiling android goes as expect', () => { 
  //expect(compileAndroidCode).toThrow();
  // expect(compileAndroidCode).toThrow(ConfigError);

//聆听翻译 您也可以使用确切的错误消息或正则表达式
//   expect(compileAndroidCode).toThrow('you are using the wrong JDK');
//   expect(compileAndroidCode).toThrow('JDK')

// })
