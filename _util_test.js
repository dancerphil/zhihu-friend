var fetchFolloweeBase = require('./UtilRequest').fetchFolloweeBase

fetchFolloweeBase('48c15addf6c26b487b6740f48add9d58', 20)
	.then((value)=>{
		console.log(value)
	}).catch(function(reason) {
		console.log(reason)
});