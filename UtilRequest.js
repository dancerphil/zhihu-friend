var request = require('request')
var config = require('./config').config

exports.fetchFolloweeBase = function(hash, count) {

	return new Promise((resolve, reject) => {
		request({
			method: 'POST',
			url: 'https://www.zhihu.com/node/ProfileFolloweesListV2',
			form: {
				method: "next",
				params: `{"offset":${count},"order_by":"created","hash_id":"${hash}"}`,
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
				resolve(JSON.parse(body).msg)
			} else {
				reject(response.statusCode)
			}
		})
	})
}
