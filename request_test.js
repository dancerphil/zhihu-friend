var request = require('request');

request('http://www.baidu.com', function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log('1')
	}
})


request({
	method: 'POST',
	url: 'https://www.zhihu.com/node/ProfileFolloweesListV2',
	form: {
		method: "next",
		params: `{"offset":20,"order_by":"created","hash_id":"48c15addf6c26b487b6740f48add9d58"}`,
		_xsrf: '7fae8fb2e48d86d944072e8ab57f8b4b'
	},
	headers: {
		'cookie': 'd_c0="AGBANxwtswmPTvX1211mNc7W_Kdb442_ZC0=|1459423134"; _za=0c977f5b-eabd-4928-815b-883b85d3019f; q_c1=b0f4a1b5f8934aea916bdb8885288455|1459423139000|1459423139000; cap_id="YjZlMzhmZGJiMTdhNDk2MTliZjYzOTIyNzZlNmIxZjE=|1459423139|9b9edf9489e1ef3142cd09c1f17000bfc1cf4da6"; l_cap_id="NjViOGFmM2I3MjlkNGMyOGFkODYxNzgxMTdjMzE3YjQ=|1459423139|2b4a0ba7afd32de53b1e6c956fd04329ce219eb2"; _xsrf=7fae8fb2e48d86d944072e8ab57f8b4b; login="OTNlYWVhNzJkM2QxNGZmMmI0NTIzODFlNDE0YmM4MzY=|1459423150|f6bc11e878c236e2e138d2d7c69418a5e39e4dd3"; z_c0="QUFCQUZfY21BQUFYQUFBQVlRSlZUYS1VSkZlNU1WMnZBVVFGRlU1VlBIUXcyQURKZ1NsdWVBPT0=|1459423150|239eaf2d89a6a135619a9d3ea64ef705c7e6d924"; n_c=1; _zap=e9b85973-1879-45bb-a04f-03435ea90b0e; _ga=GA1.2.1586921029.1460459846; s-t=autocomplete; s-q=%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC; s-i=2; sid=9lsk99sg; __utmt=1; __utma=51854390.1586921029.1460459846.1462010643.1462010643.1; __utmb=51854390.6.10.1462010643; __utmc=51854390; __utmz=51854390.1462010643.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmv=51854390.100-1|2=registration_date=20140226=1^3=entry_date=20140226=1',
		'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'cache-control': 'no-cache',
		'x-requested-with': 'XMLHttpRequest'
	},
	timeout: 1500
}, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		require('fs').writeFile('test_out.html',JSON.parse(body).msg)
		console.log('2')
	}
})