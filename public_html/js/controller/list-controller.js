(function (global) {
	var ListController = function (options) {
		return new Controller({
			id: "players",
			eventBus: options.eventBus,
			actions: {
				show: function(ev) {
					var item = ev.target.parentNode;
					this.eventBus.emit("selection-changed", {
						name: util.text(item.querySelector("h3")),
						src: ev.target.src,
						country: util.text(item.querySelector("label"))
					});
				}
			}
		});
	};
	global.ListController = ListController;
} (this));