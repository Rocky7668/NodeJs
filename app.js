var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database :'nodejs',

})

con.connect();

var Insert_query = "INSERT INTO node(name,email,password) VALUES('fenil','fenil@gmail.com','fenil@123')";

var select_query = "select * from node";

var update_query = "update node set  name = 'demo', email='demo@gmail.com',password='demo@123' where id = 1 "; 

var delete_query = "delete from node where id = 1";
con.query(delete_query,function(errors,result,index){
    if(errors) throw errors;

    console.log(result);
})
