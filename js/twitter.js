// eslint-disable-next-line
const env = require('env2')('../.env');
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const postTweet = (tweet) => {
  client.post('statuses/update', { status: tweet })
    .then((successfulTweet) => {
      console.log('tweet successful:', successfulTweet.text);
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = postTweet;
