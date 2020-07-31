const express = require('express');
const users = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const User = require("../models/User");


users.post('/signup',(req, res) => {
  User.findOne({ email: req.body.email })
  .then(user => {
    if (user) {
      return res
        .status(400)
        .json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

        bcrypt.hash(newUser.password, 10, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      
    }
  });
});







module.exports = users;