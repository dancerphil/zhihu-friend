var fetchFolloweeBase = require('./UtilRequest').fetchFolloweeBase

fetchFolloweeBase('48c15addf6c26b487b6740f48add9d58', 20)
	.then((value)=>{
		// insertFolloweeArray
		var s = ''
		value.forEach((v)=>{
			console.log(v)
			s += JSON.stringify(v) + '\n'
		})
		require('fs').writeFile('test.txt',s)
	}).catch(function(reason) {
		console.log(reason)
});