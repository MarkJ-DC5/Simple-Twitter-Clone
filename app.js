// Rainbow~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const cloud = document.querySelector('#cloud');
const rainbow = document.querySelectorAll('.rainbow');
const myBody = document.body;

const colors = [
	'#ffadad',
	'#ffd6a5',
	'#fdffb6',
	'#caffbf',
	'#9bf6ff',
	'#a0c4ff',
	'#bdb2ff',
];

cloud.addEventListener('mouseenter', function () {
	let currentColor = 0;
	let delay = 200;
	rainbow.forEach((letter) => {
		setTimeout(() => {
			letter.style.color = `${colors[currentColor]}`;
			myBody.style.background = `${colors[currentColor]}`;
			currentColor++;
		}, delay);
		delay += 250;
	});
});

cloud.addEventListener('mouseleave', () => {
	setTimeout(() => {
		let delay = 200;
		rainbow.forEach((letter) => {
			setTimeout(() => {
				letter.style.color = `black`;
				myBody.style.background = `white`;
			}, delay);
			delay += 250;
		});
	}, 500);
});

// Simple Twiiter~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const tweetForm = document.querySelector('#tweetForm');
const tweets = document.querySelector('#tweets');

function createTweet(username, tweetC) {
	const tweet = document.createElement('div');
	const author = document.createElement('h3');
	const bar = document.createElement('hr');
	const content = document.createElement('p');

	author.innerText = username;
	content.innerText = tweetC;
	tweet.append(author);
	tweet.appendChild(bar);
	tweet.append(content);
	tweet.classList.add('tweet');
	tweets.append(tweet);
}

tweetForm.addEventListener('submit', function (e) {
	e.preventDefault();
	const username = tweetForm.elements.username.value.trim();
	const toTweet = tweetForm.elements.toTweet.value.trim();

	if (username != '' || toTweet != '') {
		createTweet(username, toTweet);
		tweetForm.elements.username.value = '';
		tweetForm.elements.toTweet.value = '';
	}
});
