// https://github.com/starkwang
var request = require('request')
var config = require('./config').config

exports.fetchFolloweeBase = function(user, count) {

	return new Promise((resolve, reject) => {
		request({
			method: 'POST',
			url: 'https://www.zhihu.com/node/ProfileFolloweesListV2',
			form: {
				method: "next",
				params: `{"offset":${count},"order_by":"created","hash_id":"${user.hash}"}`,
				_xsrf: config._xsrf
			},
			headers: {
				'cookie': config.cookie,
				'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
				'cache-control': 'no-cache',
				'x-requested-with': 'XMLHttpRequest'
			},
			timeout: 1500
		}, (error, response, body) => {
			if (error){
				reject(error)
			} else if (response.statusCode == 200) {
				resolve(JSON.parse(body).msg.map(regHandler))
			} else {
				reject(response.statusCode)
			}
		})
	})
}

function regHandler(str) {
	var result = {}
	var reHash = /data-id=\"(\S*)\"/g
	var reName = /<h2 class=\"zm-list-content-title\">.*>(.*)<\/a><\/h2>/g
	var reID = /href=\"https:\/\/www\.zhihu\.com\/people\/(\S*)\"/g
	reHash.exec(str)
	result.hash = RegExp.$1
	reName.exec(str)
	result.name = RegExp.$1
	reID.exec(str)
	result.id = RegExp.$1
	return result
}
