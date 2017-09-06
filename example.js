const format = require('.')

const f1 = format()
const f2 = format({format: 'YYYY-MM-DD HH:mm:ss'})
const f3 = format({style: 'dim.green'})

f1.log('fancy', 'format', 'log')

f2.error('fancy', 'format', 'error')
f2.warn('fancy', 'format', 'warn')

f3.info('fancy', 'foramt', 'info')
f3.dir('fancy format dir')
