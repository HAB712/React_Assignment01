const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
createCategory

} = require('../controllers/categoryController');
                           
                           

router.post('/', upload.single('image'), createCategory);        
                         
module.exports = router;