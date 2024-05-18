function map (l, func)
{
	for (i in l) {
		l[i] = func(l[i]);
		console.log(l[i]);
	}
}

let l = [1, 2, 3, 4, 5];

map(l, (x) => (x + 1));