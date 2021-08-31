const {getContact, getBy, addContact, destroyContact, updateContact} = require("../models/Contact.js");

const title = "Contact App";

const index = async (req, res) => {
   return res.render("index", {
      title: title,
      data: [],
      contacts: await getContact(),
      action: "Add",
      url: "/contact/create"
   });
};

const create = (req, res)=>{
   const {name, number} = req.body;
   addContact(name, number);
   
   return res.redirect("/");
}

const edit = async (req, res)=>{
   return res.render("index", {
      title: title,
      data: await getBy(req.params.id),
      contacts: await getContact(),
      action: "Update",
      url: "/contact/update"
   });
}

const update = (req, res)=>{
   const {id, name, number} = req.body;
   updateContact(name, number, id);

   return res.redirect("/");
}

const destroy = (req, res)=>{
   const {id} = req.params;
   destroyContact(id);

   return res.redirect("/");
}

module.exports = {index, create, edit, update, destroy};