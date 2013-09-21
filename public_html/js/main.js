/*global Controller: false, alert: false, console: false */
/*jshint browser: true */
(function (global) {
	
	var body = document.querySelector("body"),
		text = function(el) {
			return el.firstChild.nodeValue;
		};
	
	var controller = new Controller({
		id: "players",
		actions: {
			show: function(ev) {
				var item = ev.target.parentNode;
				detailController.setModel({
					name: text(item.querySelector("h3")),
					src: ev.target.src,
					country: text(item.querySelector("label"))
				});

				body.classList.add("page-detail");
			}
		}
	});
	
	var detailController = new Controller({
		id: "detail",
		elements: {
			name: ".name",
			image: ".badge",
			country: ".country"
		},
		actions: {
			hide: function () {
				body.classList.remove("page-detail");
			}
		}
	});
	
	detailController.setModel = function (player) {
		this.$$.name.innerHTML = player.name;
		this.$$.image.src = player.src;
		this.$$.country.innerHTML = player.country;
	};
}(this));