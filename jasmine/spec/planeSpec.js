"use strict";

describe('Plane', function(){
	var plane;
	var airport;

	beforeEach(function(){
		plane = new Plane();
		airport = jasmine.createSpyObj('airport', ['readyForLanding', 'readyForTakeOff']);
	});

	it('can land at an airport', function(){
		plane.land(airport);
		expect(airport.readyForLanding).toHaveBeenCalledWith(plane);
	});

	it('can takeoff from and airport', function(){
		plane.land(airport);
		plane.takeoff(airport);
		expect(airport.readyForTakeOff).toHaveBeenCalledWith(plane);
	});
});