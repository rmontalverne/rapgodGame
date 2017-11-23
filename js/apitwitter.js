var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'wceAhvDbFMALqhAlQyT7N9yLG',
  consumer_secret: 'I0oug4XXxkfzrjffSqttCGYnb41LAaf3KLd79RpaXTR4YCph7u',
  access_token_key: '2922413734-shIdYYCoWmXTrcLB0l9AwxDUq540PHnuvtjL647',
  access_token_secret: 'OmdwurtOy5t2USdsPrtBJKmTA6jtJHVItS5XC6ILVSaN3'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


client.post('statuses/update', {status: 'Perdi no jogo Rap God Card Game!'}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});


