let list = [1, 2, 3];
let x = list;

console.log(list, x);
list.push(4);
console.log(list, x);

let num = list[0];
console.log(num);
list[0] = 7;
console.log(num);