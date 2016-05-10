'use strict';

describe('Airport', function(){
	var airport;
	var plane;
	var weather;

	beforeEach(function(){
		plane = jasmine.createSpy('plane');
		weather = jasmine.createSpyObj('weather', ['isStormy']);
		airport = new Airport(weather);
	});

	it('has no planes by default', function(){
		expect(airport.planes()).toEqual([]);
	});

	describe('when weather is nice', function(){
		beforeEach(function(){
			weather.isStormy.and.returnValue(false);
		});

		it('receive plane when ready', function(){
			airport.readyForLanding(plane);
			expect(airport.planes()).toEqual([plane]);
		});

		it('release plane when takeoff', function(){
			airport.readyForLanding(plane);
			airport.readyForTakeOff(plane);
			expect(airport.planes()).toEqual([]);
		});
	});

	describe('when weather is stormy',function(){
		beforeEach(function(){
			weather.isStormy.and.returnValue(true);
		});

		it('does not clear planes for takeoff', function(){
			expect(function(){ 
				airport.readyForTakeOff(plane);
			}).toThrowError('cannot takeoff during storm');
		});

		it('does not clear planes for landing', function(){
			expect(function(){ 
				airport.readyForLanding(plane);
			}).toThrowError('cannot land during storm');
		});  
	});
});