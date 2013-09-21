/*global alert: false */
/*jslint browser: true */
(function (global) {
	var Controller = function (options) {
		var container = document.getElementById(options.id);
		
		container.addEventListener("click", function (ev) {
			var action = ev.target.dataset.action;
			if (action) {
				alert(action);
			}
		}, false);
	};
	
	global.Controller = Controller;
}(this));