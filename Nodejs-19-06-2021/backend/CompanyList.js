var http = require('http')
var CompanyData = [
    {name:"TCS"},
    {name:"Infosys"},
    {name:"Oracal"},
    {name:"McAfee"},
    {name:"XYKA"},
    {name:"Arcelius"},
    {name:"Nityo"}
];
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.writeHead(200, {'Content-Type':'Application/json'})
    var JsonData = JSON.stringify(CompanyData)
    res.write(JsonData)
    res.end()
}).listen(3033)