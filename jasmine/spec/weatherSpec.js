'use strict';

describe('Weather', function(){
	var weather;

	beforeEach(function(){
		weather = new Weather();
	});

	it('Gives stormy conditions sometimes', function(){
		spyOn(Math, 'random').and.returnValue(1);
		expect(weather.isStormy()).toBeTruthy();
	});

	it('Gives nice conditions sometimes', function(){
		spyOn(Math, 'random').and.returnValue(0);
		expect(weather.isStormy()).toBeFalsy();
	});

});