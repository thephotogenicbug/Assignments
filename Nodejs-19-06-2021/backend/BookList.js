var http = require('http')
var BookData = [
    {name:"Java"},
    {name:"php"},
    {name:"Node"},
    {name:"Mysql"},
    {name:"Html"},
    {name:"css"},
    {name:"Bootstrap"}
];
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.writeHead(200, {'Content-Type':'Application/json'})
    var JsonData = JSON.stringify(BookData)
    res.write(JsonData)
    res.end()
}).listen(3031)