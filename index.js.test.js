const myFunctions = require('./index.js')

test('Testing sum -- success', () => {
   const target = 30;
   const result = myFunctions.sum(12, 18);
   expect(target).toBe(result);
});





