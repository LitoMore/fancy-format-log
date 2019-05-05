# fancy-format-log

[![](https://img.shields.io/travis/LitoMore/fancy-format-log/master.svg)](https://travis-ci.org/LitoMore/fancy-format-log)
[![](https://img.shields.io/npm/v/fancy-format-log.svg)](https://www.npmjs.com/package/fancy-format-log)
[![](https://img.shields.io/npm/l/fancy-format-log.svg)](https://github.com/LitoMore/fancy-format-log/blob/master/LICENSE)
[![](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Log things, prefixed with a customized format timestamp

![](https://raw.githubusercontent.com/LitoMore/fancy-format-log/master/screenshot.png)

## Install

```bash
$ npm install fancy-format-log
```

## Usage

```javascript
const format = require('fancy-format-log')

const options = {
  format: 'YYYY-MM-DD HH:mm:ss:ms',   // Optional - Default is 'HH:mm:ss'
  style: 'dim.green'                  // Optional - Default is 'grey'
}

const f = format(options)

f.log('a message')
f.error('oh no!')
```

**Valid patterns**

- `YYYY`: full year
- `MM`: month
- `DD`: day
- `HH`: hours
- `mm`: minutes
- `ss`: seconds
- `ms`: milliseconds

**Valid styles**

See `chalk-pipe` [valid styles](https://github.com/LitoMore/chalk-pipe#valid-styles).

## Example

Here is [example](https://github.com/LitoMore/fancy-format-log/blob/master/example.js).

## API

### `f.log(msg...)`

Logs the message as if you called `console.log` but prefixes the output with the current time.

### `f.error(msg...)`

Logs the message as if you called `console.error` but prefixes the output with the current time.

### `f.warn(msg...)`

Logs the message as if you called `console.warn` but prefixes the output with the current time.

### `f.info(msg...)`

Logs the message as if you called `console.info` but prefixes the output with the current time.

### `f.dir(msg...)`

Logs the message as if you called `console.dir` but prefixes the output with the current time.

## Related

- [chalk-pipe](https://github.com/LitoMore/chalk-pipe) - Create chalk style schemes with simpler style strings
- [fancy-log](https://github.com/js-cli/fancy-log) - Log things, prefixed with a timestamp

## License

MIT © [LitoMore](https://github.com/LitoMore)
