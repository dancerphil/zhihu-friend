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
Promise.resolve('a').then((value) => {
	var fetchList = []
	for(var i = 0; i < 100; i+=20){
		fetchList.push(fetchFolloweeBase(user, i)
			.then((value)=>{
				return insertFolloweeArray(user, value)
			}))
	}
	var returnList = []
	returnList.push(Promise.resolve(value + '\n'))
	returnList.push(Promise.all(fetchList))
	return Promise.all(returnList)
	//return Promise.all(fetchList)
}).then(([initData, value]) => {
	require('fs').writeFile('test.txt',initData + JSON.stringify(value))
}).catch(function(reason) {
		console.log('--------failed--------')
		console.log(reason)
		console.log('----------------------')
	});