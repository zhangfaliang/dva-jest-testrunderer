//测试异步代码

//Don't do this 
function fetchData (callback)  { 
  return new Promise((resolve) => { 
    setTimeout(() => {
      resolve(callback('peanut butter'))
    }, 80);
  })
}

// function fetchData1 ()  { 
//   return new Promise((resolve,reject) => { 
//     setTimeout(() => {
//       resolve(('peanut butter'))
//     }, 800);
//   })
// }
// function fetchData2 ()  { 
//   return new Promise((resolve,reject) => { 
//     setTimeout(() => {
//       reject('error')
//     }, 800);
//   })
// }
test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }
  fetchData(callback);
});

// test('the data is peanut butter', () => {
//   expect.assertions(1);
//   return fetchData1().then(data => {    
//     expect(data).toBe('peanut butter');
//   });
// })

// test('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return fetchData2().catch(e =>
//     expect(e).toMatch('error')
//   );
// });

// test('async the data is peanut butter', async () => { 
//   expect.assertions(1);
//   const data = await fetchData1();
//   expect(data).toBe('peanut butter')
// })

// test('async the data is error', async () => { 
//   try {
//     await fetchData2()
//   } catch (e) {
//     expect(e).toMatch('error')
//   }
// })

// test('resolve the fetch data is peanut butter', async () => { 
//   expect.assertions(1);
//   await expect(fetchData1()).resolves.toBe('peanut butter')
// })

// test('reject the fetch error',async () => { 
//   expect.assertions(1);
//   await expect(fetchData2()).rejects.toMatch('error')
// })