const mysql = require('mysql');

const connection = mysql.createConnection({
   host: 'localhost',
   user: "heioca",
   password: "123456",
   database: "contact_agenda"
});


connection.connect(error => {
   if(error) throw error;
   console.log("Mysql Connect");
});


module.exports = {connection};