// 템플릿 리터럴

let a = 5;
let b = 10

console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");

console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

var person = "Mike";
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "

  var ageStr;
  if (ageExp > 99) {
    ageStr = "centenarian";
  } else {
    ageStr = "youngster";
  }

  return str0 + personExp + str1 + ageStr;
}

var str = ["that "," is a "];
// var output = myTag`that ${person} is a ${age}`;
var output = myTag(str, person, age);

console.log(output);
// that Mike is a youngster