$(function() {

let tweetLink = 'https://twitter.com/intent/tweet?text=', quoteUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?';

function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}

function createTweet(input) {
	if(!input.quoteAuthor.length) {
		input.quoteAuthor = 'Unknown author';
	}

	let tweetText = 'Quote of the day - ' + input.quoteText + 'Author: ' + input.quoteAuthor;

	if (tweetText.length > 140) {
		getQuote();
	} else {
		let tweet = tweetLink + encodeURIComponent(tweetText);
		$('.quote p').text(input.quoteText);
		$('.author h2').text("Author: " + input.quoteAuthor);
		$('.tweet').attr('href', tweet);
	}
}

$('.trigger').click(function() {
	getQuote();
});

getQuote();

});
