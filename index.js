'use strict';
/*
  Forked form https://github.com/js-cli/fancy-log
 */
const chalkPipe = require('chalk-pipe');
const timestamp = require('time-stamp');

class Log {
	constructor(options) {
		options = options || {};
		this.format = options.format || 'HH:mm:ss';
		this.style = options.style || 'grey';
	}

	getTimestamp() {
		return '[' + chalkPipe(this.style)(timestamp(this.format)) + ']';
	}

	log(...args) {
		const time = this.getTimestamp();
		process.stdout.write(time + ' ');
		console.log(...args);
		return this;
	}

	info(...args) {
		const time = this.getTimestamp();
		process.stdout.write(time + ' ');
		console.info(...args);
		return this;
	}

	dir(...args) {
		const time = this.getTimestamp();
		process.stdout.write(time + ' ');
		console.dir(...args);
		return this;
	}

	warn(...args) {
		const time = this.getTimestamp();
		process.stderr.write(time + ' ');
		console.warn(...args);
		return this;
	}

	error(...args) {
		const time = this.getTimestamp();
		process.stderr.write(time + ' ');
		console.error(...args);
		return this;
	}
}

module.exports = function (pattern) {
	return new Log(pattern);
};
