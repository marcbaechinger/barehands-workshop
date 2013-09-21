(function (global) {
	
	var playerListRenderer = function (model, container) {
		var buf = "";
		model.players.forEach(function (player, idx) {
			buf += "<li><img data-action='show' src='" + player.src + "' class='badge' src='";
			buf += player.src;
			buf += "'/><h3>";
			buf += player.name;
			buf += "</h3>";
			buf += "<label>";
			buf += player.country;
			buf += "</label>";
			buf += "</li>";
		});
		container.innerHTML = buf;
	};
	
	var ListController = function (options) {
		return Controller.call(this, {
			id: "players",
			eventBus: options.eventBus,
			model: options.model,
			actions: {
				show: function(ev) {
					var item = ev.target.parentNode;
					this.eventBus.emit("selection-changed", {
						name: util.text(item.querySelector("h3")),
						src: ev.target.src,
						country: util.text(item.querySelector("label"))
					});
				}
			},
			render: playerListRenderer
		});
	};
	
	
	global.ListController = ListController;
} (this));