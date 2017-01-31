var fs = require('fs')
var buffer=fs.readFile(process.argv[2],'utf-8',function(err,data){
  console.log(data.split('\n').length-1);
})
