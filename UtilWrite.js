var Datastore = require('nedb')
  , followeeDB = new Datastore({ filename: 'data/followee.db' })
  , friendDB = new Datastore({ filename: 'data/friend.db' })
  , userDB = new Datastore({ filename: 'data/user.db' })
db.loadDatabase();


exports.insertFolloweeArray = function(firstID, arr) {
	return new Promise((resolve, reject) => {
		// TODO: for() {
		// insertFollowee(firstID, arr[],getID)

	})
}

insertFollowee = function(firstID, secondID) {
	return new Promise((resolve, reject) => {

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
