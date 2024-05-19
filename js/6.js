// 1.
function findFirstCapital(str)
{
	i = str.search(/[A-Z]/)
	return i >= 0 ? console.log(str[i]) : console.log("대문자 없음");
	
}
// 활용예
findFirstCapital("helloWorld"); // W
findFirstCapital("helloworld"); // 대문자 없음

// 2.
function printLastChars(str)
{
	for (i of str.split(" "))
		console.log(i[i.length - 1]); // i.at(-1)
}
//  사용예
printLastChars("Hello world from JavaScript");

// 3.
const arr = [1, 'text', 3.14, 5, { key: 'value' }, 6.28732, 7];

//  각 요소가 숫자라면 그것이 정수 또는 실수임을 출력하도록 코드를 작성해보세요.
//  실수라면 소수 두 자리까지만 나타내세요.
for (i of arr) {
	if (typeof i === 'number')
		if (Number.isInteger(i))
			console.log("정수");
		else
			console.log(i.toFixed(2));
}

// 4. 
function calculateCircleArea(num)
{
	console.log(Math.PI * (num ** 2));
}
//  실행 예시
calculateCircleArea(5); // 78.53981633974483
// 5.
console.log(Math.random() >= 0.5);
// 5.
function isWeekend(y, m, d)
{
	let date = new Date(y, m - 1, d);
	console.log(date.toString());
	return date.getDay() === 0 || date.getDay() === 6;
}
// 사용 예시
console.log(isWeekend(2023, 11, 3)); // false
console.log(isWeekend(2023, 11, 4)); // true
console.log(isWeekend(2023, 11, 5)); // true