Weather = function(){
	this._PROBABILITY_OF_STORM = 0.25;
}

Weather.prototype.isStormy = function() {
	if(Math.random() > this._PROBABILITY_OF_STORM) {
		return false;
	} else {
		return true;
	}
};