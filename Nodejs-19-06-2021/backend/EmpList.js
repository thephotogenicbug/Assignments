var http = require('http')
var EmpData = [
    {name:"Naveen",     age:"24"},
    {name:"Ramesh",     age:"26"},
    {name:"Suresh",     age:"29"},
    {name:"Kumar",      age:"30"},
    {name:"Achari",     age:"44"},
    {name:"Ajith",      age:"50"},
    {name:"Vijay",      age:"47"}
];
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.writeHead(200, {'Content-Type':'Application/json'})
    var JsonData = JSON.stringify(EmpData)
    res.write(JsonData)
    res.end()
}).listen(3034)