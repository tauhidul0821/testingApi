const app = require('../app');

describe('absolute',()=>{
	it('absolute - should return a positive number if input is positive ',()=>{
		const result = app.absolute(1);
		expect(result).toBe(1);
	});

	it('absolute - should return a positive number if input is nagative ',()=>{
		const result = app.absolute(-1);
		expect(result).toBe(1);
	});

	it('absolute - should return a 0 number if input is 0 ',()=>{
		const result = app.absolute(0);
		expect(result).toBe(0);
	});
});
