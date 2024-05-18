function combArms ()
{
	return (x, y) =>
	{
		let res = x;
		for (const arm of arguments)
		{
			if (typeof arm !== 'function')
				continue;
			res = arm(res, y);
		}
		return res;
	}
}

function combArms2(x, y, ...arms)
{
	let res = x;
	for (const arm of arms) {
		if (typeof arm !== 'function')
			continue;
		console.log(arm, res, x, y);
		res = arm(res, y);
	}
	return res;
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(combArms2(1, 2, add, mul));