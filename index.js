'use strict'
/*
  Forked form https://github.com/js-cli/fancy-log
 */
const chalkPipe = require('chalk-pipe')
const timestamp = require('time-stamp')

class Log {
  constructor (options) {
    options = options || {}
    this.format = options.format || 'HH:mm:ss'
    this.style = options.style || 'grey'
  }

  getTimestamp () {
    return '[' + chalkPipe(this.style)(timestamp(this.format)) + ']'
  }

  log () {
    const time = this.getTimestamp()
    process.stdout.write(time + ' ')
    console.log.apply(console, arguments)
    return this
  }

  info () {
    const time = this.getTimestamp()
    process.stdout.write(time + ' ')
    console.info.apply(console, arguments)
    return this
  }

  dir () {
    const time = this.getTimestamp()
    process.stdout.write(time + ' ')
    console.dir.apply(console, arguments)
    return this
  }

  warn () {
    const time = this.getTimestamp()
    process.stderr.write(time + ' ')
    console.warn.apply(console, arguments)
    return this
  }

  error () {
    const time = this.getTimestamp()
    process.stderr.write(time + ' ')
    console.error.apply(console, arguments)
    return this
  }
}

module.exports = function (pattern) {
  return new Log(pattern)
}
