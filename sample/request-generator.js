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
	protocol: 'https',
	insecure: true,
	body:'',
	requestsPerSecond:5,
	maxSeconds:10
};

loadtest.loadTest(options, (error, results) => {
	if (error) {
		return console.error('Got an error: %s', error);
	}
	console.log(results);
	console.log('Tests run successfully');
});

