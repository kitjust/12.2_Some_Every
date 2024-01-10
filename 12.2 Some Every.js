function hasOddNumber(a){
	return a.some(function(val){
		return val % 2 !== 0;
	})
}
hasOddNumber([2,2,2,2,2,4])

function hasAZero(num){
	let string = num + '';
	return string.split('').some(function(val){
		return val === '0';
	})
}
hasAZero(1212121)

function hasOnlyOddNumbers(a){
	return a.every(function(val){
		return val % 2 !== 0;
	})
}
hasOnlyOddNumbers([1,3,5,7])

function hasNoDuplicates(a){
	return a.every(function(val){
		return a.indexOf(val) === a.lastIndexOf(val);
	})
}
hasNoDuplicates([1,2,3])	

let arr = [
	{title: "Instructor", first: 'Elie', last:"Schoppik"},
	{title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
	{title: "Instructor", first: 'Matt', last:"Lane"},
	{title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]

function hasCertainKey(a, key){
	return a.every(function(val){
		return key in val
	})
}
hasCertainKey(arr,'first')
hasCertainKey(arr,'isCatOwner')


function hasCertainValue(a, key, searchValue){
	return a.every(function(val){
		return val[key] === searchValue;
	})
}
hasCertainValue(arr,'title','Instructor') 
hasCertainValue(arr,'first','Elie')
