/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function (cb) {
		/*var twitter = require('ntwitter');
		var t = new twitter({
		      access_token_key: '81839408-DOUDKQ4pk9kQ5w6aNYSPS2KVcM9JspOZVBpvJYDPE',
		      access_token_secret: 'fBqXl1QFJbcPAYoxikryk24BT4URfEXvHgnGVVST0xWA3',
		      consumer_key: 'JtgoxNahYzFGQX0Gd0bQk6inR',
		      consumer_secret: 'WejLUQLRs9gof9BfACTaLp7Hhj5SegzfcTtmQTSTDAYMa6f0Rh'
		});

		t.stream('statuses/filter', {  follow: ['1030711922'] }, function(stream) {
		
			stream.on('data', function(tweet) {
				var text = tweet.text.toLowerCase(); */
				//text= text.replace(/ *\([^)]*\) */g, "");
				/*	text= text.replace('rt @deadlinedaylive:', "");
				text= text.replace('@deadlinedaylive', "");
				if(! new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(text)) {
        

				 First.findByNicknameLike(text).exec( function( err, news ){
				 	 if(err) return;
                     if (news.length == 0){
                     	First.create({nickname: text,email:"tweet"}).exec(function(err, data) {
                     		First.find(function(err, user) {
			                   sails.io.sockets.emit("users_updated",user);
			                });
                     	});
                     	
                     } 
                 });
                 }
				
			
			});

		});
 */

  // It's very important to trigger this callack method when you are finished 
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};