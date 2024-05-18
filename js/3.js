// const score = 85;
// if (score >= 90)
// 	console.log("A");
// else if (score >= 80 && score < 90)
// 	console.log("B")
// else if (score >= 70 && score < 80)
// 	console.log("C")
// else if (score >= 60 && score < 70)
// 	console.log("D")
// else
// 	console.log("F");

// const food = 'pasta';
// switch (food)
// {
// 	case 'pizza':
// 	case 'risotto':
// 	case 'pasta':
// 		console.log("Italian");
// 		break;
// 	case 'burger':
// 		console.log("American");
// 		break;
// 	default:
// 		console.log("Unknown");
// }

// for (let i = 1; i <= 20; i++) {
// 	if (i % 2 === 0)
// 		console.log(i);
// }

// const nums = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i of nums) {
// 	sum += i;
// }
// console.log(sum);

// let user = {id: 1, name: 'Alice', job: 'Developer'};
// for (let k in user) {
// 	if (k === "name")
// 		continue;
// 	console.log(`${k} : ${user[k]}`);
// }

let count = 5;
while (count)
{
	console.log(count-- * 10);
}