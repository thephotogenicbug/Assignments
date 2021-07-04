const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json()); 

/* MySQL connection */
const mysql = require("mysql");
const mydatabase = mysql.createConnection({
    host :'localhost',
    user:'root',
    password:'',
    database:'project'
});
mydatabase.connect(); /* nodejs will get connected to mysql */

    /* select * from tableName */
app.get("/projectlist", function(req, res){
    mydatabase.query('select * from projectlist', (error,rows,fields)=>{
     if(error) throw error
     res.send(JSON.stringify(rows));
     res.end();
    })
})


app.post("/saveproject", function(req, res){
    var name = req.body.name;
    var mobile = req.body.mobile;
    var email = req.body.email;
    var address = req.body.address;
    var sql = "insert into projectlist(name, mobile, email, address) values('"+name+"', '"+mobile+"', '"+email+"', '"+address+"')";
    mydatabase.query(sql, (error, rows, fields)=>{
        if(error) throw error
        res.send("Project Details Received Successfully !");
        res.end()
    })
})



app.listen(2222, () =>{

})