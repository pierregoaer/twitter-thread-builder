# Twitter Thread Builder

Twitter is my main source of information and education on a variety of topic. Tweets being litmited to 280 characters, users have started using threads to be able to tell longer stories, stories that wouldn't fit into 280 characters.

This project was a lot of fun to build as it represents for me a real tool that I will now be able to leverage when creating my own threads to post on Twitter.

_This little app was a personal project._

## 🚀 So how does is work?

This app is 100% Vanilla JavaScript and was a good way for me to work on my Object Oriented Porgramming skills. It uses 2 different classes:

1. **The `App` class**: this is the main class that makes the entire app work. It creates and executes all the different methods needed: 

  - `displayButtons()`: this methods displays or removes the buttons based on the thread size. If the thread is empty, 'Save thread' and 'Delete thread' are hidden.

  - `addTweetForm()`: this is the main methods that allows to add tweets to the thread. When invoked, a new tweet object is created with the Tweet class, pushed in the Tweets array and the `renderTweet()` method is called.

  - `renderTweet()`: this methods creates creates and adds to the page a new HTML tweet element.

  - `updateTweetContent()`: this method is the most important one. It is called with an event handler listening for `key up` and `key down`. If a text area is active, this method updates the tweet object with the new content of the text area, updates the character counter, and updates the character progression bar on the right side.

  - `deleteTweet()`: when clicking the delete tweet button, this methods removes the html element element from the page and removes the tweet from the tweets array.

  - `deleteThread()`: this methods selects every tweet on the page and applies the deleteTweet() method to it. It also sets the tweets array to an empty array. Being irreversible, this methods starts with a `window.confirm` to make sure the user actually wants to delete the thread.

  - `addToLocalStorage()`: this method is invoked when the user clicks on the "save thread" button. It saves the tweets array to the local storage. When the page reloads, the methods renderLocalStorage is invoked to render all tweets on the page.


2. **The `Tweet` class**: this class is invoked when users add new tweets to a thread. This class defines the content of the tweet, its unique ID as well as the length of the tweet.


## 🎓 What did I learn with this project?

This project was my first personal project practicing my Object Oriented Programming skills. I was a a great way to see how to quickly create objects, manipulate them and remove them. It was also a great way to see how to interact with different HTML elements depending on which tweet was the one active. Displaying the character counter (both number and progress bar) was a fun challenge.

## ⏭ What's next now?

I am now working on my biggest project to date called Forkify. Depending on when you read this, it might already be up on my Github so I invite you to go have a look in [my repos](https://github.com/pierregoaer?tab=repositories) and you might find it.

## 👨🏽‍💻 Have some thoughts on this?

I love feedback (positive or negative) and I believe it's the best way to grow, learn and improve. I'd love to hear from you if there's anything you noticed and would like to talk to me about. [Email me](mailto:hello@pierregoaer.com) and I will make sure to get back to you. 🙋🏼‍♂️