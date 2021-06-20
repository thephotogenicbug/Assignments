var http = require('http')
var cal = require('./calculatormodule')
http.createServer(function (req, res) {

    res.writeHead(200, {
        "Content-Type": 'text/html'
    });

var add = cal.add(100,200)
var sub = cal.sub(100,50)
var multi = cal.multi(5,4)
var mod = cal.mod(7,3)
var div = cal.div(100,77)

 addition = "<h1 align='center'>Addition of -: 100 and 200 = " + add + "</h1> <br/>"
 subtract = "<h1 align='center'> Subtract of -: 100 - 50 = " + sub + "</h1> <br/>"
 multiply = "<h1 align='center'> Multiply of -: 5 - 4 = " + multi + "</h1> <br/>"
 modulo = "<h1 align='center'> Mod of -: 7 % 3 = " + mod + "</h1> <br/>"
 division = "<h1 align='center'> Division of -: 100/77 = " + div + "</h1> <br/>"

res.end(addition + subtract + multiply + modulo + division)

}).listen(3131)