/**
 * 为多次测试重复设置 #
 */
let cityList = [];
const initializeCityDatabase = () => { 
  cityList = ['Vianna']
  
}
const clearCityDatabase = (params) => { 
  
  cityList=[]
}

beforeEach(() => { 
  initializeCityDatabase();
})

afterEach(() => { 
  clearCityDatabase(1);
})

beforeAll(() => { 
  return initializeCityDatabase()
})

afterAll(() => { 
  return clearCityDatabase(2);
})

const isCity = (city) => { 
  return 'Vianna'==city
}
test('city database has Vienna', () => {
  expect(isCity('Vianna')).toBeTruthy();
})

//使用descripe

describe('matching cities to foods', () => { 
  const isValidCityFoodPair = (city,otherCity) => { 
    return true
  }
  beforeEach(() => { 
    console.log('describe-beforeEach');
  })
  
  test('Vienna <3 sausage ', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  // test.only('this will be the only test that tuns', () => { 
  //   expect(ture).toBe(false);
  // })
  // test('this test will not run', () => { 
  //   console.log('aaaaaaaaaaaaaaaaaaa');
    
  //   expect('A').toBe('A')
  // })
})