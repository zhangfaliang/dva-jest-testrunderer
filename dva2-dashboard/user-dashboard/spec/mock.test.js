
function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
const mockCallback = jest.fn();
forEach([0, 1], mockCallback);


describe('=======', () => { 

 
  expect(mockCallback.mock.calls.length).toBe(2); // 此模拟函数被调用了两次
  expect(mockCallback.mock.calls[0][0]).toBe(0); // 此模拟函数第一个参数是0
  expect(mockCallback.mock.calls[1][0]).toBe(1); // 此模拟函数第二个参数是1


  test('test', () => { 
    expect(true).toBe(true)
  })
})


