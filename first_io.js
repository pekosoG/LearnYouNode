var fs = require('fs')
var buffer=fs.readFileSync(process.argv[2],'utf-8')

var cadena=buffer.toString();
var cadena_sep=cadena.split('\n')
console.log((cadena_sep.length-1))
