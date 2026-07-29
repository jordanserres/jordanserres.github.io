/* Bascule clair/sombre.
   Le thème initial est celui du système ; dès que le lecteur clique, son choix
   est mémorisé et prend le pas dessus. Le stockage est enveloppé dans un
   try/catch : navigation privée et cookies bloqués le rendent inaccessible. */

(function () {
	"use strict";

	var root = document.documentElement;
	var button = document.getElementById("theme-toggle");

	if (!button) {
		return;
	}

	button.hidden = false;

	function current() {
		return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
	}

	function describe() {
		button.setAttribute(
			"aria-label",
			current() === "dark" ? "Switch to light theme" : "Switch to dark theme"
		);
	}

	describe();

	button.addEventListener("click", function () {
		var next = current() === "dark" ? "light" : "dark";

		root.setAttribute("data-theme", next);
		describe();

		try {
			localStorage.setItem("theme", next);
		} catch (e) {
			/* choix non mémorisé d'une page à l'autre, sans conséquence ici */
		}
	});
})();
