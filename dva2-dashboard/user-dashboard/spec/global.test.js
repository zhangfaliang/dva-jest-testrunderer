const globalDatabase = {
  thing: {},

};

afterAll(() => { 
  console.log('所有test运行完执行');
})

afterEach(() => { 
  console.log('每个test运行完直接执行');
  
})

beforeAll(() => { 
  console.log('在任何test运行之前zhixing');
  
})

beforeEach(() => { 
  console.log('每个test运行之前执行');
  
})

describe('name', () => { 
  console.log('相当于块级元素');
  
})

describe.only('my beverage', () => {
  test.skip(' test.skip', () => { 
    expect('test.skip').toBe('test.skip')
  })
  test.only(' test.only', () => { 
    expect('test.only').toBe('test.only')
  })
  test('is delicious', () => {
    expect(true).toBeTruthy();
  });
  it('test change ', () => { 
    expect('test change').toBe('test change')
  })
  test('is not sour', () => {
    expect(false).toBeFalsy();
  });
});

describe('my other beverage', () => {
 console.log('将被跳过');
 
});

describe('my beverage', () => {
  test('is delicious', () => {
    expect(true).toBeTruthy();
  });

  test('is not sour', () => {
    expect(false).toBeFalsy();
  });
});

describe.skip('my other beverage', () => {
    console.log('特意不执行 通常是只是一个更容易选择到暂时注释掉一大块的测试。');
    test('000000000000r', () => {
      expect(false).toBeFalsy();
    });
});
