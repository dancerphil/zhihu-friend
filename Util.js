
exports.fetchAndUpdateFolloweeOf = function(user) {
	return new Promise((resolve, reject) => {
		// TODO:
		// remove(first == user)
		// for() {
		// 	UtilRequest.getFolloweeBase
		// 	.then( UtilWrite.insertFolloweeArray(user, arr)
	})
}

exports.calculateAndUpdateFriendOf = function(user) {
	return new Promise((resolve, reject) => {
		// remove(first == user)
		// remove(second == user)
		// TODO: 两种，这样是两次查询，也可以 n 次查询，先list ，for findone(first, second)，感觉不好
		// let list        = UtilRead.findFolloweeOf
		// let listReverse = UtilRead.findFolloweeTo
		// .then
		// forfor
		//  if(list[].secondID == listReverse[].firstID)
		//      TODO: 两种，另一种先push到一个array里，然后for循环结束后一次写，好像也差不多，耦合性低一些
		//      UtilWrite.insertFriend(list[])
	})
}

exports.findFriendOf = function(user) {
	return new Promise((resolve, reject) => {
		// UtilRead.findFriend
	})
}

exports.findPath = function(user, targetUser) {
	return new Promise((resolve, reject) => {
		// 两头 BFS
	})
}