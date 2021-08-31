const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 8000;

//Configurations
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
//Pug
app.set("views", "./views");
app.set("view engine", "pug");
//Static files
app.use(express.static(__dirname+"/views"));
app.use(express.static(__dirname+"/src"));

//Routes
app.use(require("./src/js/routes/web.js"));

//Run server
app.listen(port, ()=>{
   console.log(`Server init on port ${port}`);
});