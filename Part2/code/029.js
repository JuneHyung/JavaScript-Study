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
	},
	
	getHeadcount: function(){
        // member의 key들을 모아 배열로 반환하고, 반환된 배열의 길이를 통해 family 객체의 사이즈출력
		return Object.keys(this.members).length;
	}
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

var printMembers = function () {
    var members = family.members; // mebers에 family에있는 members를 담음.
    for (role in members) {
        console.log('role => ' + role + ', name => ' + members[role].name + ', age =>' + members[role].age);
    }
};
printMembers();

var members = family.members; // mebers에 family에있는 members를 담음.
members['nephew'] = { age: 3, name: 'hyun' }; // 키가 nephew인 값이 {age:3, name:'hyung}인 속성을 추가.
members.niece = { age: 5, name: 'lyn' }; // 키가 niece라는 값들을 수정.
delete members.aunt; // key가 aunt인 속성을 삭제.
delete members['dog']; // key가 dog인 속성을 삭제.
printMembers();