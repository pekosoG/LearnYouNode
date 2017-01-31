var http=require('http')
var url=require('url')

var server=http.createServer(function(req,res){
  if (req.method == 'GET') {
    var laUrl=url.parse(req.url,true)
    if(laUrl.pathname=='/api/parsetime'){
      if(laUrl.query.iso){
        var laDate=new Date(laUrl.query.iso)
        var jsonResp={}
        jsonResp["hour"]=laDate.getHours()
        jsonResp["minute"]=laDate.getMinutes()
        jsonResp["second"]=laDate.getSeconds()

        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(jsonResp))
      }
    }
    if(laUrl.pathname=='/api/unixtime'){
      var laDate=new Date(laUrl.query.iso)
      res.writeHead(200,{'Content-Type':'application/json'})
      var jsonResp={"unixtime":laDate.getTime()}
      res.end(JSON.stringify(jsonResp))
    }
  }
})

server.listen(process.argv[2])
