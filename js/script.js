document.addEventListener('DOMContentLoaded', () =>{
	const button = document.querySelector(".button");
	const message = document.querySelector(".message");

	button.addEventListener("click", function () {
		message.classList.remove("hidden");
	})
});