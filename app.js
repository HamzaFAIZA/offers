const express = require('express');
const vehicleRouter = require('./routes/vehicle.route');
const app = express();

app.use('/vehicle', vehicleRouter);


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

// import express from 'express';

//  import db from './db/db';
// // Set up the express app
// const app = express();
// // get all vehicles
// app.get('/api/vehicles', (req, res) => {
//   res.status(200).send({
//     success: 'true',
//     message: 'vehicles retrieved successfully',
//     vehicles: db
//   })
// });
// get vehicle by id
// app.get('/api/vehicles/:id', (req, res) => {
//     let id = req.params.id;
//     let vehicles = db[0].Items;
//     let vehicle =null;
//     vehicles.forEach(function(element){
//         if(element.id.S ==id){
//             vehicle = element;
//         }
//       });
//     res.send(vehicle);
//     if(vehicle != null){
//         res.status(200).send({
//             success: 'true',
//             message: 'vehicles retrieved successfully',
//             vehicles: db[0].Items
//           })
//     }else{
//         res.status(200).send({
//             success: 'false',
//             message: 'vehicles not found',
//           })
//     }
    
//   });
// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`server running on port ${PORT}`)
// });
 