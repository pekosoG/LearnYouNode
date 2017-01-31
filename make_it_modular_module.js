var fs= require('fs')

var filterByExtension=function(dir,ext,callback){
  fs.readdir(dir,function(err,list){
    if(err)
      callback(err)
    else{
      var array=[];
      for(var index=0;index<list.length;index++){
        var filter=list[index].split('.'+ext)
        if(filter.length>1)
          array.push(list[index]);
        }
      callback(null,array)
      }
  })
}

module.exports=filterByExtension
