/*global alert: false */
/*jslint browser: true */
(function (global) {
	var Controller = function (options) {
		var that = this,
			container = document.getElementById(options.id),
			actions = options.actions || {};
		
		container.addEventListener("click", function (ev) {
			var action = ev.target.dataset.action;
			if (action && actions[action]) {
				actions[action].apply(that, arguments);
			}
		}, false);
	};
	
	global.Controller = Controller;
}(this));