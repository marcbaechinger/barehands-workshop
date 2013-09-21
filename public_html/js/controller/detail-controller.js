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
				this.setModel = function (player) {
					this.$$.name.innerHTML = player.name;
					this.$$.image.src = player.src;
					this.$$.country.innerHTML = player.country;
				};
			}
		});
	};
	
	global.DetailController = DetailController;
} (this));