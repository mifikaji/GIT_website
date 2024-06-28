document.addEventListener('DOMContentLoaded', () =>{
	const page = document.getElementById("page");

	page.addEventListener("click", function(){
		if (page.getAttribute("src") == "img/8.png"){
			page.src = "img/1.png"}
		else if (page.getAttribute("src") == "img/1.png"){
			page.src = "img/2.png"}
		else if (page.getAttribute("src") == "img/2.png") {
			page.src = "img/3.png"}
		else if (page.getAttribute("src") == "img/3.png") {
			page.src = "img/4.png"}
		else if (page.getAttribute("src") == "img/4.png") {
			page.src = "img/5.png"}
		else if (page.getAttribute("src") == "img/5.png") {
			page.src = "img/6.png"}
		else if (page.getAttribute("src") == "img/6.png") {
			page.src = "img/7.png"}
		else if (page.getAttribute("src") == "img/7.png") {
			page.src = "img/8.png"}
		else if (page.getAttribute("src") == "img/8.png") {
			page.src = "img/9.png"}
		else if (page.getAttribute("src") == "img/9.png") {
			page.src = "img/10.png"}
		else if (page.getAttribute("src") == "img/10.png") {
			page.src = "img/11.png"}
		else{
			page.src = "img/12.png"
		}
    });
});