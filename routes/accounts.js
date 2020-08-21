const express = require("express");
const router = express.Router();
const passport = require("passport");
//models
const User = require("../models/User");
const Account = require("../models/Account");

//Fetching user account information
router.get('/',passport.authenticate("jwt",{session: false}),(req,res) => {
    User.findOne({_id: req.user.id}).then((account) => {
        if(!account)
        {
            res.status(404).json({account: "UnAuthorized User"});
        }
        Account.findOne({user: req.user.id}).populate("user").then(account => {
            res.json(account);
        });
    });
});

//Storing or Updating the Users account's information
router.post('/',passport.authenticate("jwt",{session: false}),(req,res) => {

    let accountFields = {};

    accountFields.user = req.user.id;
    if(req.body.avatar) accountFields.avatar = req.body.avatar;
    if(req.body.phoneNo) accountFields.phoneNo = req.body.phoneNo;
    if(req.body.address) accountFields.address = req.body.address;
    if(req.body.city) accountFields.city = req.body.city;
    if(req.body.zipCode) accountFields.zipCode = req.body.zipCode;
    if(req.body.country) accountFields.country = req.body.country;

    User.findOne({_id: req.user.id}).then((account) => {
        if(!account)
        {
            res.status(404).json({account: "UnAuthorized User"});
        }

        Account.findOne({user: req.user.id}).then(account =>{
            //if there is the account present, then update
            if(account)
            {
                Account.findOneAndUpdate({user: req.user.id},{$set: accountFields},{new: true}).then(account =>{
                    if(!account)
                    {
                        res.status(404).json({account: "UnAuthorized User"})
                    }
            
                });
            } else {
                //if there is no account create a new
                const newAccount = new Account(accountFields);
                
                newAccount.save().then((account) => {
                    res.json({account});
                });
            }

        });
    });

});

//Delete user account
router.delete('/',passport.authenticate("jwt", {session: false}),(req, res) => {
    User.findOneAndRemove({_id: req.user.id}).then(() => {
        Account.findOneAndRemove({user: req.user.id}).then(() => {
            res.json({success: "Account Deleted"});
        });
    });
});

module.exports = router;