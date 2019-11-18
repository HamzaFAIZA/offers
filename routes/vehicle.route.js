const express = require('express');
const router = express.Router();
const vehicle_controller = require('../controllers/vehicle.controller');

router.get('/get',vehicle_controller.vehicle_get);
router.get('/get_id/:id',vehicle_controller.vehicle_get_id);

//export routes to app.js
module.exports = router ;
