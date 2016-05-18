var Datastore = require('nedb')
  , followeeDB = new Datastore({ filename: 'data/followee.db' })
  , friendDB = new Datastore({ filename: 'data/friend.db' })
  , userDB = new Datastore({ filename: 'data/user.db' })
followeeDB.loadDatabase();
friendDB.loadDatabase();
userDB.loadDatabase();

exports.clearFollowee = function (first) {
	return new Promise((resolve, reject) => {
		followeeDB.remove({ firstID: first.id }, { multi: true }, function (err, numRemoved) {
			if (err) {
				reject(err)
			} else {
				resolve(numRemoved)
			}
		});
	})
}

exports.insertFolloweeArray = function(first, arr) {
	return new Promise((resolve, reject) => {
		var insertList = []
		arr.forEach((second) => {
			insertList.push(insertFollowee(first.id, second.id))
		})
		Promise.all(insertList).then((values) => {
			resolve(values)
		}).catch((reason) => {
			reject(reason)
		})
		// TODO: for() { maybe promise.map or promise,all
		// insertFollowee(firstID, arr[],getID)

	})
}

insertFollowee = function(firstID, secondID) {
	return new Promise((resolve, reject) => {
		var link = {
			firstID,
			secondID
		}
		followeeDB.insert(link, (err, value) => {
			if(err){
				reject(err)
			} else {
				// link 加入数据库，然后只返回关注者
				resolve(value.secondID)
			}
		})
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
