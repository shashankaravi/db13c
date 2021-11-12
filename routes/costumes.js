var express = require('express'); 
const costume_controllers= require('../controllers/costume'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', costume_controllers.costume_view_all_Page ); 
module.exports = router; 
router.get('/costumes/:id', costume_controllers.costume_detail);