var family = {
	'address' : 'Seoul', // 키 address에 값은 'Seoul'인 속성을 객체에 추가.
	members: {}, // 아직 멤버에 아무것도 없음.
	
    addFamily: function (age, name, role) {
        // Key를 role, Value를 age, name
        // 찾을때 members['role값']하면 해당 role의 age와 name이 출력.
		this.members[role] = { // this키워드를 통해 family 객체 내부 속성에 접근.
			age: age,
			name: name
        };
        // Key를 age, Value를 name, role
        // 찾을 때 members['age값'] 하면 해당 age의 name과 role이 출력.
        this.members[age] = {
            name: name,
            role: role
        }
	},
	
	getHeadcount: function(){
        // member의 key들을 모아 배열로 반환하고, 반환된 배열의 길이를 통해 family 객체의 사이즈출력
		return Object.keys(this.members).length;
	}
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

console.log(family.members['aunt']); // key가 aunt인 객체 출력
console.log(family.members[30]); // key가 30인 객체 출력
console.log(family.members); // addFamily가 어떻게 들어가는지 확인.
console.log(family.getHeadcount());