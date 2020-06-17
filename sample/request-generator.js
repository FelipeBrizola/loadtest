'use strict';

/**
 * Sample request generator usage.
 * Contributed by jjohnsonvng:
 * https://github.com/alexfernandez/loadtest/issues/86#issuecomment-211579639
 */

const loadtest = require('../lib/loadtest.js');

// https://localhost:5003/api/receipt/cancellation/pos

const options = {
	url: 'https://localhost:3000/health',
	concurrency: 5,
	method: 'GET',
	// body:'',
	requestsPerSecond:5,
	maxSeconds:10,
	
	// requestGenerator: (params, options, client, callback) => {
	// 	const message = '{"hi": "ho"}';
	// 	options.headers['Content-Length'] = message.length;
	// 	options.headers['Content-Type'] = 'application/json';
	// 	options.body = 'YourPostData';
	// 	options.path = 'YourURLPath';
	// 	const request = client(options, callback);
	// 	request.write(message);
	// 	return request;
	// }
};

loadtest.loadTest(options, (error, results) => {
	if (error) {
		return console.error('Got an error: %s', error);
	}
	console.log(results);
	console.log('Tests run successfully');
});

