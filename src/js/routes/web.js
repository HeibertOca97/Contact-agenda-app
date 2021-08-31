const express = require('express');
const app = express();
const router = express.Router();
const {index, create, edit, update, destroy} = require('../controllers/ContactController.js');

//Middleware
app.use((req, res, next)=>{
   if (req.originalUrl && req.originalUrl.split("/").pop().includes("favicon.ico")){
      return res.sendStatus(204);
   }
   return next();
});

//Router
router.get('/', index);
router.post('/contact/create', create);
router.get('/contact/id=:id/edit',edit);
router.post('/contact/update', update);
router.post('/contact/destroy/:id', destroy);

module.exports = router;