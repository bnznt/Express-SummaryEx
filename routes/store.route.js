const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer({dest: './public/img/uploads'})

const controller = require('../controllers/store.controller');

router.post('/product', upload.array('image', 7), controller.postCreate);

router.delete('/product/:id', controller.deleteProduct);

module.exports = router;