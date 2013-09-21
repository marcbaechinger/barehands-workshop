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
		
		var model = {
			players: [
				{
					name: "Diego Maradona",
					src: "img/diego.jpg",
					country: "Argentina"
				},
				{
					name: "Michel Platini",
					src: "img/platini.jpg",
					country: "France"
				},
				{
					name: "Antonin Panenka",
					src: "img/antonin.jpg",
					country: "Czech"
				},
				{
					name: "Zico",
					src: "img/zico.jpg",
					country: "Brasil"
				}
			]
		};
		
		eventBus.bind("selection-changed", function(model) {
			body.classList.add("page-detail");
		});
		eventBus.bind("hide-detail", function() {
			body.classList.remove("page-detail");
		});
	
		new ListController({
			model: model,
			eventBus: eventBus
		});
		new DetailController({
			eventBus: eventBus
		});
	};
	
	global.ApplicationController = ApplicationController;
} (this));