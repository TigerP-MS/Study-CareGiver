// 1.
// const numbers = [1, 2, 3, 4, 5];

//  배열의 메소드들을 활용해서, 홀수만 추려내어 10을 곱한 뒤
//  각각 출력하는 코드를 작성해보세요.

// numbers.filter(i => i % 2).map(i => i * 10).forEach(i => console.log(i));

// 2.
// const numbers = [1, 3, 2, 5, 4];

// //  reduce를 사용해서 최대값을 구하는 코드를 작성해보세요.
// numbers.reduce((prev, curr) => {
// 	max = curr >= prev ? curr : prev;
// 	return max;
// })
// console.log(max);

// 3.
// const users = [
// 	{ name: 'Alice', age: 17 },
// 	{ name: 'Bob', age: 23 },
// 	{ name: 'Charlie', age: 16 },
// 	{ name: 'David', age: 30 },
// 	{ name: 'Eddie', age: 28 }
// ];

// //  18세 이상의 사용자 이름을 쉼표로 구분한 대문자로 출력하는 코드를 작성해보세요.
// users
// .filter(({age}) => age >= 18)
// .map(({name}) => name.toUpperCase())
// .join(', ');

// 4.

const users = [
	{ name: 'Alice', job: 'developer' },
	{ name: 'Bob', job: 'designer' },
	{ name: 'Charlie', job: 'developer' },
	{ name: 'David', job: 'manager' },
	{ name: 'Eve', job: 'developer' }
];

//  사용자가 직업별로 몇 명이 있는지 객체로 반환하는 코드를 작성해보세요.
//  목표 결과: {developer: 3, designer: 1, manager: 1}

const jobCounts = users.reduce((acc, {job}) => {
	acc[job] = (acc[job] || 0) + 1;
	return acc;
}, {});

// 5. 
const x = [12, 37, 5, 42, 19];
const y = [28, 4, 33, 21, 50];
const z = [47, 13, 9, 36, 22];

//  위의 배열들 중 가장 큰 수를 출력하는 가장 간결한 코드를 작성해보세요.
console.log(Math.max(...x, ...y, ...z));