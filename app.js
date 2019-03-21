module.exports ={
	sayHello:  function(){
		return 'hello';
	},
	addNumber: function(value1,value2){
		return value1+value2;
	},
	absolute: function(number){
		return (number >=0) ? number : -number;
	}
}