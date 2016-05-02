var request = require('request');
var config = require('./config').config;

request({
	method: 'POST',
	url: 'https://www.zhihu.com/node/ProfileFolloweesListV2',
	form: {
		method: "next",
		params: `{"offset":20,"order_by":"created","hash_id":"48c15addf6c26b487b6740f48add9d58"}`,
		_xsrf: config._xsrf
	},
	headers: {
		'cookie': config.cookie,
		'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'cache-control': 'no-cache',
		'x-requested-with': 'XMLHttpRequest'
	},
	timeout: 1500
}, function (error, response, body) {
	// console.log(body)
	if (!error && response.statusCode == 200) {
		require('fs').writeFile('test_out.html',JSON.parse(body).msg)
		console.log('1')
	}
})