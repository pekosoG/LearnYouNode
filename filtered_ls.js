var fs= require('fs')
fs.readdir(process.argv[2],function(err,list){
  list.forEach(function(data){
    var filter=data.split('.'+process.argv[3])
    if(filter.length>1)
      console.log(data)
  })
})
