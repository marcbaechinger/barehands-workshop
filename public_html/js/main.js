/*global Controller: false, alert: false */
/*jshint browser: true */
(function (global) {
	
	var body = document.querySelector("body");
	
	var controller = new Controller({
		id: "players",
		actions: {
			show: function(ev) {
				body.classList.add("page-detail");
			}
		}
	});
	
	var detailController = new Controller({
		id: "detail",
		actions: {
			hide: function () {
				body.classList.remove("page-detail");
			}
		}
	});
}(this));