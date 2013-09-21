/*global alert: false */
/*jslint browser: true */
(function (global) {
	var Controller = function (options) {
		var that = this,
			container = document.getElementById(options.id),
			actions = options.actions || {};
		
		if (options.elements) {
			this.queryElements(options.elements, container);
		}
		
		container.addEventListener("click", function (ev) {
			var action = ev.target.dataset.action;
			if (action && actions[action]) {
				actions[action].apply(that, arguments);
			}
		}, false);
		
		if (options.init) {
			options.init.call(this, options);
		}
		
		if (options.eventBus) {
			this.eventBus = options.eventBus;
		}
	};
	Controller.prototype.queryElements = function (spec, container) {
		var name, selector, resultList;
		this.$$ = {};
		for (name in spec) {
			selector = spec[name];
			resultList = container.querySelectorAll(selector);
			if (resultList.length === 1) {
				this.$$[name] = resultList.item(0);
			} else {
				this.$$[name] = resultList;
			}
		}
	};
	
	global.Controller = Controller;
}(this));