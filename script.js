const tweetList = document.querySelector('.tweet-list');
const firstTweet = document.querySelector('.first-tweet');
const tweet = document.querySelector('.tweet');
const addTweetButton = document.querySelector('.add-tweet-button');
const deleteThreadButton = document.querySelector('.delete-thread-button');
const saveThreadButton = document.querySelector('.save-thread-button');

let id = 0;

////// Claases declaration //////

class Tweet {
	characters = 0;
	constructor(content, id) {
		this.content = content;
		this.id = id;
	}
}

class App {
	tweets = [];
	constructor() {
		tweetList.addEventListener('click', this.deleteTweet.bind(this));
		// window.addEventListener('keyup', this.countCharacters.bind(this));
		// window.addEventListener('keydown', this.countCharacters.bind(this));
		window.addEventListener('keyup', this.updateTweetContent.bind(this));
		window.addEventListener('keydown', this.updateTweetContent.bind(this));
		addTweetButton.addEventListener('click', this.addTweetForm.bind(this));
		deleteThreadButton.addEventListener('click', this.deleteThread.bind(this));
		saveThreadButton.addEventListener('click', this.saveThread.bind(this));
	}

	addTweetForm() {
		const newTweet = new Tweet('', id);
		this.tweets.push(newTweet);
		const html = `
    <div class="tweet-container">
    <div class="character-counter">280</div>
		<div class="character-progression-bar"></div>
    <img src="img/me.jpg" alt="" class="picture" />
    <div class="tweet-content">
    <div class="info">
    <div class="name">Pierre Goaer</div>
    <div class="handle">@pierregoaer</div>
    <div class="dot">·</div>
    <div class="time">12m</div>
    </div>
    <textarea name="" data-id="${id}" rows="5" class="tweet" placeholder="Type your tweet here"></textarea>
    <div class="icons">
    <div class="icon">
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" class="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path></svg>
    </div>
    <div class="icon">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="retweet" class="svg-inline--fa fa-retweet fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path fill="currentColor" d="M629.657 343.598L528.971 444.284c-9.373 9.372-24.568 9.372-33.941 0L394.343 343.598c-9.373-9.373-9.373-24.569 0-33.941l10.823-10.823c9.562-9.562 25.133-9.34 34.419.492L480 342.118V160H292.451a24.005 24.005 0 0 1-16.971-7.029l-16-16C244.361 121.851 255.069 96 276.451 96H520c13.255 0 24 10.745 24 24v222.118l40.416-42.792c9.285-9.831 24.856-10.054 34.419-.492l10.823 10.823c9.372 9.372 9.372 24.569-.001 33.941zm-265.138 15.431A23.999 23.999 0 0 0 347.548 352H160V169.881l40.416 42.792c9.286 9.831 24.856 10.054 34.419.491l10.822-10.822c9.373-9.373 9.373-24.569 0-33.941L144.971 67.716c-9.373-9.373-24.569-9.373-33.941 0L10.343 168.402c-9.373 9.373-9.373 24.569 0 33.941l10.822 10.822c9.562 9.562 25.133 9.34 34.419-.491L96 169.881V392c0 13.255 10.745 24 24 24h243.549c21.382 0 32.09-25.851 16.971-40.971l-16.001-16z"></path>
    </svg>
    </div>
    <div class="icon">
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
    </div>
    <div class="icon">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
    </div>
    <div class="delete-tweet-button">Delete</div>
    </div>
    </div>
    </div>
    `;
		tweetList.insertAdjacentHTML('beforeend', html);
		// console.log(this.tweets);
		id++;
	}

	updateTweetContent(e) {
		// Update the object itself and the character count
		if (!e.target.classList.contains('tweet')) return;
		const activeTweet = e.target;
		const activeTweetId = activeTweet.dataset.id;
		const tweet = this.tweets.find(tweet => tweet.id == activeTweetId);
		const characterCounter = activeTweet.closest('.tweet-container').querySelector('.character-counter');
		const characterProgressBar = activeTweet.closest('.tweet-container').querySelector('.character-progression-bar');
		tweet.content = activeTweet.value;
		tweet.characters = activeTweet.value.length;
		characterCounter.innerHTML = `${280 - activeTweet.value.length}`;
		characterProgressBar.style.height = `${(activeTweet.value.length * 100) / 280}%`;
		// console.log('After edit', this.tweets);
	}

	deleteTweet(e) {
		if (!e.target.classList.contains('delete-tweet-button')) return;
		const clickedTweetContainer = e.target.closest('.tweet-container');
		const clickedTweet = clickedTweetContainer.querySelector('.tweet');
		const tweet = this.tweets.find(tweet => tweet.id == clickedTweet.dataset.id);
		const indexTweet = this.tweets.indexOf(tweet);
		// console.log(`clicked: ${clickedTweet.dataset.id} | tweet: ${tweet.id} | index: ${indexTweet}`);

		this.tweets.splice(indexTweet, 1);
		clickedTweetContainer.remove();

		// console.log('After deletion', this.tweets);
	}

	deleteThread() {
		const confirmation = window.confirm('Deleting a thread is irreversible, do you want to continue?');
		if (!confirmation) return;
		document.querySelectorAll('.tweet-container').forEach(tweet => tweet.remove());
	}
}

const app = new App();
