function YalcoChicken (name, no) {
	this.name = name;
	this.no = no;
	this.introduce = function () {
	return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
	}
}

// 본사의 정보와 업무
YalcoChicken.brand = '얄코치킨';
YalcoChicken.contact = function () {
return `${this.brand}입니다. 무엇을 도와드릴까요?`;
};

const chain1 = new YalcoChicken('판교', 3);

console.log(YalcoChicken);
