"use strict";

describe('Feature Test:', function(){
	var plane;
	var airport;

	beforeEach(function(){
		plane = new Plane();
		airport = new Airport();
	});

	describe('when weather is nice', function(){
		beforeEach(function(){
			spyOn(Math, 'random').and.returnValue(1);
		});

		it('Planes can be instructed to land at an airport', function(){
			plane.land(airport);
			expect(airport.planes()).toContain(plane);
		});

		it('Planes can be instructed to takeoff', function(){
			plane.land(airport);
			plane.takeoff();
			expect(airport.planes()).not.toContain(plane);
		});
	});

	describe('when weather is stormy', function(){
		it('blocks takeoff', function(){
	    spyOn(Math, 'random').and.returnValue(1);
	    plane.land(airport)
	    spyOn(airport._weather, 'isStormy').and.returnValue(true);
	    expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
	    expect(airport.planes()).toContain(plane);
	  });

		it('blocks landing', function(){
			spyOn(Math, 'random').and.returnValue(0);
	    expect(function(){ plane.land(airport);}).toThrowError('cannot land during storm');
	    expect(airport.planes()).not.toContain(plane);
	  });
	});
});