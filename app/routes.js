const express = require("express");
const router = express.Router();
const controller = require('./controller/index');

router.get('/provinsi', controller.getProvinsiSQL);

router.post('/provinsi', controller.addProvinsi);
module.exports = router;