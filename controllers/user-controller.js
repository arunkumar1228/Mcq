const bcrypt = require("bcryptjs");
const mongodb = require("mongodb");
const { validationResult } = require("express-validator");
const User = require("../models/user-model");

exports.getTestData = (req, res, next) => {
  return res.json({ message: "This is test data", error: false });
};




exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
    
  console.log("User Name: ", username, "Password: ", password);

  User.findOne({ username: username })
    .then((user) => {
      if (!user) {        
        return res.json({
          message: "Invalid username or password",
          error: true,
        });
      }

      bcrypt
        .compare(password, user.password)
        .then((doMatched) => {
          if (doMatched) {            
            return res.json({
              message: "Login successfull",
            })
          } else {
            return res.json({
              message: "Login NOT successfull",
              error: true,
            });
          }          
        })
        .catch((err2) => {          
          return res.json({
            message: err2,
            error: true,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.json({
        message: err,
        error: true,
      });
    });
};

exports.postSignup = (req, res, next) => {
  let newuser= new User(req.body);
 newuser.save((err, book) => {
    if (err)
      res.send(err);
    res.json(book);
  });
}


exports.postAdmin = (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
    
  console.log("User Name: ", username, "Password: ", password);

  User.findOne({ username: username })
    .then((user) => {
      if (!user) {        
        return res.json({
          message: "Invalid username or password",
          error: true,
        });
      }

      bcrypt
        .compare(password, user.password)
        .then((doMatched) => {
          if (doMatched) {            
            return res.json({
              message: " Admin Login successfull",
            })
          } else {
            return res.json({
              message: " Admin NOT Login successfull",
              error: true,
            });
          }          
        })
        .catch((err2) => {          
          return res.json({
            message: err2,
            error: true,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.json({
        message: err,
        error: true,
      });
    });
}