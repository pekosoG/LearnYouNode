var http=require('http')
var concatStream=require('concat-stream')

var dataArray=[]

for(var index=2;index<process.argv.length;index++){
  http.get(process.argv[index],function(response){
    response.pipe(concatStream(function(data){
      //console.log('orale')
      dataArray.push(data.toString())
      if(dataArray.length==3){
        dataArray.forEach(function(data){
          console.log(data)
        })
      }
    }))
  })
}

//
