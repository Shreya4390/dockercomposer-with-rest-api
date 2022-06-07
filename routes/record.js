const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

recordRoutes.get("/", (req, res) => {res.status(200).send({
  message: `Hello World`
});});

recordRoutes.post("/addUser", (req, res) => {
  console.log(req.body)
  const dbConnect = dbo.getDb();
  const userDocument = {
    username: req.body.username,
    email: req.body.email,
    age: req.body.age,
    phone: req.body.phone
  };

  dbConnect
    .collection('userDocument')
    .insertOne(userDocument, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting user!');
      } else {
        console.log(`Added a new match with id ${result.insertedId}`);
        res.status(200).send({
          message: `User added successfully.`
      });
      }
    });
})


recordRoutes.get("/userList", (req, res) => {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('userDocument')
    .find({})
    .limit(5)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching listings!');
      } else {
        res.json(result);
      }
    });
});


module.exports = recordRoutes;
