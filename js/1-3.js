let obj1 = {};
let obj2 = obj1;

// immutable 객체 (String, Number, Boolean, undefined, null)
obj1 = 100;
console.log(obj1);
console.log(obj2);
// 100
// {}

let obj3 = {};
let obj4 = obj3;

// mutable 객체 (Function, Array, Object)
obj1.value = 100;
console.log(obj1);
console.log(obj2);
// { value: 100 }
// { value: 100 }