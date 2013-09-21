(function (global) {
	
	var DetailController = function (options) {
		return new Controller({
			id: "detail",
			eventBus: options.eventBus,
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
				var elements = this.$$;
				this.eventBus.bind("selection-changed", function (player) {
					elements.name.innerHTML = player.name;
					elements.image.src = player.src;
					elements.country.innerHTML = player.country;
				});
			}
		});
	};
	
	global.DetailController = DetailController;
} (this));