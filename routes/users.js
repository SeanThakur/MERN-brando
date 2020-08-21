const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
//const mailSend = require("../utils/mailSend");
//models
const User = require("../models/User");

//Registeration Api
router.post("/register", (req, res) => {
  User.findOne({email: req.body.email}).then(user => {

    if(user) 
    {
        res.status(400).json({email: "Email Already Exists"});
    } else {

        const newUser = new User({
            email: req.body.email,
            username: req.body.username,
            gender: req.body.gender,
            password: req.body.password
        });
    
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) {
                return err;
              }
              newUser.password = hash;
              newUser.save().then(user => {
                res.json(user);
              }).catch(err => {
                res.status(500).json({register: `Register Failed ${err}`});
                });
            });
        });

    }    

  });
});

//Login Api
router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email}).then((user) => {
        if(!user) {
            res.status(400).json({user: "No user found."});
        }

        bcrypt.compare(password, user.password).then(ismatched => {
            if(ismatched)
            {

                const payload = {
                    id : user.id,
                    username : user.username,
                    email : user.email,
                    gender : user.gender,
                }

                jwt.sign(payload, "secretTokenBrandO", {
                    expiresIn: 3600
                }, (err,token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });

            } else {
                res.status(400).json({password: "Password not found."})
            }
        });

        //Sending Mail to Logedin User
        // mailSend(email,user.username,(err,data) => {
        //     if(err) {
        //         // res.status(500).json({});
        //         console.log("Error sending mail " + err);
        //     } else {
        //         // res.json({message:"Email Sent"});
        //         console.log("Email Sent");
        //     }
        // });
    });
});

//Forgot Password Api
router.put("/forget-password",(req, res) => {
    
    User.findOneAndUpdate({email: req.body.email}, {$set: {password: req.body.password}},{new:true}).then((user) => {
        if(!user)
        {
            res.status(404).json({user: "No User Found"});
        }else {
            user.password = req.body.password;

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                  if(err) {
                    return err;
                  }
                  user.password = hash;
    
                  user.save().then((passwordSaved) => {
                      res.json(passwordSaved);
                  }).catch(err => {
                      res.status(400).json({err});
                  });
    
                });
            });
        }

    });

});

//Logedin User Authorization Verification Api
router.get("/current",passport.authenticate("jwt", {session: false}),(req, res) => {
  res.json(req.user);
});

//Fetching all users
router.get("/all", (req, res) => {
  User.find().then(user => {
      res.json(user);
  });
});


module.exports = router;