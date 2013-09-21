/*global Controller: false, alert: false */
/*jshint browser: true */
(function (global) {
	
	var controller = new Controller({
		id: "players",
		actions: {
			show: function(ev) {
				alert("delegated");
			}
		}
	});
}(this));