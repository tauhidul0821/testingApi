const assert = require('chai').assert;
const app = require('../app');

sayHelloResult = app.sayHello();
addNumberResult = app.addNumber(5,5);

describe('App',function(){
	describe('sayHello()',function(){

		it('app should return hello',function(){
			let result = sayHelloResult;
			assert.equal(result,'hello');
		});
		it('sayHello should return type string',function(){
			let result = sayHelloResult;
			assert.typeOf(result,'string');

		});

	});
	describe('addNumber()',function(){

		it('addNumber should be above 5',function(){
			let result = addNumberResult;
			assert.isAbove(result,5);
		});
		it('addNumber should be number',function(){
			let result = addNumberResult;
			assert.typeOf(result,'number');
		});
		
	});


});