'use strict';

function Plane(){}

Plane.prototype.land = function(airport) {
	airport.readyForLanding(this);
	this._location = airport;
};

Plane.prototype.takeoff = function(airport) {
	this._location.readyForTakeOff(this);
};