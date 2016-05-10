Weather = function(){}

Weather.prototype.isStormy = function() {
	if(Math.floor((Math.random() * 10) + 1) > 7){
		return true;
	} else {
		return false;
	}
};