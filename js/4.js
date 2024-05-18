// 1.
function max(x, y)
{
	return x >= y ? x : y;
}

const max2 = function (x, y)
{
	return x >= y ? x : y;
}

const max3 = (x, y) => x >= y ? x : y;

console.log(max(2, 3), max2(2, 3), max3(2, 3));

// 2.
function funcEach(func, array)
{
	for (i of array)
		func(i);
}

funcEach(console.log, [1, 2, 3]);

// 3.
function funcEach2(func, ...item)
{
	for (i of item)
		func(i);
}
funcEach2(console.log, 1, 2, 3);

function recursiveDecrease(x)
{
	console.log(x);
	return x == 0 ? 0 : recursiveDecrease(x - 1);
}
recursiveDecrease(5);