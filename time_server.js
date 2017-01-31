var net=require('net')

var server=net.createServer(function(socket){
  var date=new Date()
  var month=parseInt(date.getMonth())+1
  if(month<10)
    month="0"+month;

  var dateStr=date.getFullYear()+"-"+month+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()
  socket.end(dateStr+"\n")
})

server.listen(process.argv[2]);
