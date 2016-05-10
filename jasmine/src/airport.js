'use strict';

function Airport(){
	this._hangar = [];
}

Airport.prototype.planes = function(){
	return this._hangar;
};

Airport.prototype.readyForLanding = function(plane){
	this._hangar.push(plane);
};

Airport.prototype.readyForTakeOff = function(plane){
	if(this.isStormy()){
		throw new Error('cannot takeoff during storm');
	}
	this._hangar = [];
};

Airport.prototype.isStormy = function(){
	return false;
};

