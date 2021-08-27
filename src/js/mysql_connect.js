import mysql from 'mysql';

const connection = mysql.createConnection({
   host: 'localhost',
   user: "root",
   password: "",
   database: "name_database"
});


connection.connect(error => {
   if(error) throw error;
   console.log("Mysql Connect");
});


const getContact = ()=>{
   return new Promise((resolve, reject) =>{
      const sql = "SELECT * FROM agenda ORDER BY id DESC";
      connection.query(sql, (error, results, fields)=>{
         if(error) throw reject(error);
         resolve(results);
      });
   });
}

const addContact = (name, number)=>{
   const sql = `INSERT INTO agenda(id, name_contact, number_contact) VALUES(${null}, "${name}", ${number})`;
   connection.query(sql, (error, results, fields)=>{
      if(error) throw error;
   });
}

const destroyContact = id => {
   const sql = `DELETE FROM agenda WHERE id=${id}`;
   connection.query(sql, (error, results, fields)=>{
      if(error) throw error;
   });
}

export {getContact,addContact, destroyContact};