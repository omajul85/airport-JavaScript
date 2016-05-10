'use strict';

describe('Airport', function(){
	var airport;
	var plane;

	beforeEach(function(){
		airport = new Airport();
		plane = jasmine.createSpy('plane');
	});

	it('has no planes by default', function(){
		expect(airport.planes()).toEqual([]);
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

	it('can check for stormy conditions', function(){
		expect(airport.isStormy()).toBeFalsy();
	});

	describe('under stormy conditions',function(){
		it('does not clear planes for takeoff', function(){
			spyOn(airport,'isStormy').and.returnValue(true);
			expect(function(){ 
				airport.readyForTakeOff(plane);
			}).toThrowError('cannot takeoff during storm');
		});

		it('does not clear planes for landing', function(){
			spyOn(airport,'isStormy').and.returnValue(true);
			expect(function(){ 
				airport.readyForLanding(plane);
			}).toThrowError('cannot land during storm');
		});  
	});
});