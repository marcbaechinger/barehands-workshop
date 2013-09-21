(function (global) {

	var body = document.querySelector("body"),
		text = function(el) {
			return el.firstChild.nodeValue;
		};
		
	global.util = {
		text: text
	};

	var ApplicationController = function(options) {
		
		var eventBus = new Observable();
		
		eventBus.bind("selection-changed", function(model) {
			body.classList.add("page-detail");
		});
		eventBus.bind("hide-detail", function() {
			body.classList.remove("page-detail");
		});
	
		new ListController({
			eventBus: eventBus
		});
		new DetailController({
			eventBus: eventBus
		});
	};
	
	global.ApplicationController = ApplicationController;
} (this));