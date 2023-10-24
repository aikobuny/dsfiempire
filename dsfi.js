function scrollE(id) {
	let e = document.getElementById(id);
	e.scrollIntoView({ behavior: 'smooth' });
}

function goto(url) {
	window.location.href = window.location.origin + "/" + url;
}