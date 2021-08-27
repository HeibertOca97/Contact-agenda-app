import express from "express";
import {getContact,addContact, destroyContact} from "./src/js/mysql_connect.js";

const app = express();
const port = 8000;

app.listen(port, ()=>{
   console.log(`Server init on port ${port}`);
});

//Configuration of Pug
app.set("views", "./views");
app.set("view engine", "pug");

//Configuration of static files
app.use(express.static("./views"));
app.use(express.static("./src"));

//Routes
app.get('/', async (req, res)=>{
   const title = "Contact App";

   res.render("index", {
      title: title,
      contacts: await getContact(),
      action: "Add"
   });
});

app.get('/add/:name/:number', (req, res)=>{
   let name= req.params.name, 
   number=req.params.number;

   addContact(name, number);
   res.redirect("/");
});

app.get('/delete/:id', (req, res)=>{
   let _id= req.params.id;
   destroyContact(_id);
   res.redirect("/");
});