(function (global) {

	var body = document.querySelector("body"),
		text = function(el) {
			return el.firstChild.nodeValue;
		};
		
	var ApplicationController = function(options) {
		
		var eventBus = new Observable();
		
		eventBus.bind("show-detail", function() {
			body.classList.add("page-detail");
		});
		
		eventBus.bind("hide-detail", function() {
			body.classList.remove("page-detail");
		});
	
		var controller = new Controller({
			id: "players",
			eventBus: eventBus,
			actions: {
				show: function(ev) {
					var item = ev.target.parentNode;
					detailController.setModel({
						name: text(item.querySelector("h3")),
						src: ev.target.src,
						country: text(item.querySelector("label"))
					});
					this.eventBus.emit("show-detail");
				}
			}
		});
	
		var detailController = new Controller({
			id: "detail",
			eventBus: eventBus,
			elements: {
				name: ".name",
				image: ".badge",
				country: ".country"
			},
			actions: {
				hide: function () {
					this.eventBus.emit("hide-detail");
				}
			},
			init: function(options) {
				this.setModel = function (player) {
					this.$$.name.innerHTML = player.name;
					this.$$.image.src = player.src;
					this.$$.country.innerHTML = player.country;
				};
			}
		});
	};
	
	global.ApplicationController = ApplicationController;
} (this));