var Datastore = require('nedb')
  , followeeDB = new Datastore({ filename: 'data/followee.db' })
  , friendDB = new Datastore({ filename: 'data/friend.db' })
  , userDB = new Datastore({ filename: 'data/user.db' })
followeeDB.loadDatabase();
friendDB.loadDatabase();
userDB.loadDatabase();


exports.insertFolloweeArray = function(first, arr) {
	return new Promise((resolve, reject) => {
		arr.forEach((second) => {
			insertFollowee(first.id, second.id)
		})
		resolve(3)
		// TODO: for() { maybe promise.map or promise,all
		// insertFollowee(firstID, arr[],getID)

	})
}

insertFollowee = function(firstID, secondID) {
	return new Promise((resolve, reject) => {
		console.log(firstID, secondID)

	})
}

exports.insertFriendArray = function(firstID, arr) {
	return new Promise((resolve, reject) => {
		// TODO: for() {
		// insertFriend(firstID, arr[],getID)

	})
}

insertFriend = function(firstID, secondID) {
	return new Promise((resolve, reject) => {

	})
}

exports.insertUser = function(user) {
	return new Promise((resolve, reject) => {

	})
}
