const {connection} = require('../mysql_connect.js');

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

const getBy = id => {
   return new Promise((resolve, reject) =>{
      const sql = `SELECT * FROM agenda WHERE id=${id}`;
      connection.query(sql, (error, results, fields)=>{
         if(error) throw reject(error);
         resolve(results);
      });
   });
}

const updateContact = (name, number, id) => {
   const sql = `UPDATE agenda SET name_contact="${name}", number_contact=${number} WHERE id=${id}`;
   connection.query(sql, (error, results, fields)=>{
      if(error) throw error;
   });
}

module.exports = {getContact, getBy, addContact, destroyContact, updateContact};