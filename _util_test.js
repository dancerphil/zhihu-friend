var fetchFolloweeBase = require('./UtilRequest').fetchFolloweeBase
var user = require('./config').user
var insertFolloweeArray = require('./UtilWrite').insertFolloweeArray

// fetchFolloweeBase(user, 20)
// 	.then((value)=>{
// 		insertFolloweeArray(user, value)
// 		var s = ''
// 		value.forEach((v)=>{
// 			console.log(v)
// 			s += JSON.stringify(v) + '\n'
// 		})
// 		require('fs').writeFile('test.txt',s)
// 	})
// 	.catch(function(reason) {
// 		console.log(reason)
// 	});

// fetchFolloweeBase(user, 548)
// 	.then((value)=>{
// 		return insertFolloweeArray(user, value)
// 	})
// 	.then((value)=>{
// 		console.log(value)
// 	})
// 	.catch(function(reason) {
// 		console.log('--------failed--------')
// 		console.log(reason)
// 		console.log('----------------------')
// 	});

var fetchList = []
for(var i = 0; i < 100; i+=20){
	fetchList.push(fetchFolloweeBase(user, i))
}
Promise.all(fetchList).then((values) => {
	console.log(values)
	require('fs').writeFile('test.txt',JSON.stringify(values))
})