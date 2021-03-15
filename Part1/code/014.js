var store = {snack: 1000, flower: 5000, beverage: 2000};

for(var item in store){
	if(!store.hasOwnProperty(item)) continue; 
    // hasOwnProperty를 통해 item 키 정보가 있는지 확인 후 없으면 continue
	
	console.log(item + '는 가격이 ' + store[item] + ' 입니다.');
}