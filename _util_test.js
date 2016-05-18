var UtilRequest = require('./UtilRequest')
var user = require('./config').user
var UtilWrite = require('./UtilWrite')
const _ = require('underscore')

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
UtilWrite.clearFollowee(user).then((numRemoved) => {
	console.log('clear: '+numRemoved)
	var fetchList = []
	for(var i = 0; i < 100; i+=20){
		fetchList.push(UtilRequest.fetchFolloweeBase(user, i)
			.then((value)=>{
				return UtilWrite.insertFolloweeArray(user, value)
			}))
	}
	return Promise.all(fetchList)

	// var returnList = []
	// returnList.push(Promise.resolve(value + '\n'))
	// returnList.push(Promise.all(fetchList))
	// return Promise.all(returnList)
}).then((value) => {
// }).then(([initData, value]) => {
	value = _.flatten(value)
	require('fs').writeFile('test.txt', JSON.stringify(value))
	// require('fs').writeFile('test.txt',initData + JSON.stringify(value))
}).catch(function(reason) {
		console.log('--------failed--------')
		console.log(reason)
		console.log('----------------------')
	});