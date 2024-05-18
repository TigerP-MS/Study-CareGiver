let a = '1';
let b = 1;

// 문자를 숫자로 변환하여 비교
console.log(a == b); // true
console.log(a === b) // false
console.log('100' < 12);

console.log('ABC' < 'abc');
// 사전순으로 비교, c와 다르게 대문자가 더 작음

// 문자와 같이쓰면 문자로 변환
let res = "aaa" + 1 + true;
console.log(res);