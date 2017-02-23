let url = 'http://api.icndb.com/jokes/random';

let button = document.getElementById('get-joke');
let paragraph = document.getElementById('joke');
button.addEventListener('click', function() {
	getJoke();
})

function getJoke() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function() {
		let response = JSON.parse(xhr.response);
		paragraph.innerText = response.value.joke;
	});
	xhr.send();
}
// dla chętnych :-)
getJoke();