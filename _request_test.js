var UtilRequest = require('./UtilRequest')
var user = require('./config').user

UtilRequest.fetchFolloweeBase(user, 0)
	.then((value)=>{
		console.log(value)
	})
