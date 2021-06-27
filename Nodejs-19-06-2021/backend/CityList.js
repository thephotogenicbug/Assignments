var http = require('http')
var CityData = [
    {name:"Bangalore"},
    {name:"Chennai"},
    {name:"Madras"},
    {name:"Kerala"},
    {name:"Karnataka"},
    {name:"Delhi"},
    {name:"Mumbai"}
];
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.writeHead(200, {'Content-Type':'Application/json'})
    var JsonData = JSON.stringify(CityData)
    res.write(JsonData)
    res.end()
}).listen(3032)