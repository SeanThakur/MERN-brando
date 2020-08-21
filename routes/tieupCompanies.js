const express = require("express");
const router = express.Router();
const passport = require("passport");
//models
const Tieup = require("../models/Tieup");
const Company = require("../models/Company");
const User = require("../models/User");

//fetching all Tieup data
router.get("/", (req, res) => {
    Tieup.find().sort({date: -1}).populate('user').populate('company').then(company => {
        res.json(company);
    });
});

//fetch users tieup Data
router.get("/my", passport.authenticate("jwt",{session: false}),(req, res) => {
    User.findOne({_id: req.user.id}).then(user => {
        if(!user)
        {
            res.status(404).json({company: "UnAuthorized User"});
        }else {
            Tieup.find({user: req.user.id}).populate("user").populate("company").then((company) => {
                res.json(company);
            });
        }
    });
});


//Storing tieup companies data
router.post("/:id",passport.authenticate("jwt",{session: false}),(req, res) => {

    Company.findOne({_id: req.params.id}).then((id) => {

        if(!id)
        {
            res.status(404).json({company: "No companies found"});
        } else {
            const newTieup = new Tieup({
                companyName : req.body.companyName,
                companyType : req.body.companyType,
                discription : req.body.discription,
                ownerName   : req.body.ownerName,
                productCount: req.body.productCount,
                user        : req.user.id,
                company     : req.params.id
            });
    
            newTieup.save().then(company => {
                res.json(company);
            });
        }


    }).catch((err) => {
        res.status(404).json({company: err})
    });

});

//storing tieup companies product data
router.post("/product/:tieupCompany_id", passport.authenticate("jwt",{session: false}),(req, res) => {

    Tieup.findOne({_id: req.params.tieupCompany_id}).then(company => {

        const newProduct = {
            name        : req.body.name,
            discription : req.body.discription,
            price       : req.body.price,
            images      : req.body.images
        }

        //Adding product in Company profile list
        company.product.unshift(newProduct);

        //Increasing product count by one when new product added
        company.productCount = company.productCount + 1;

        company.save().then(product => {
            res.json(product);
        });

    });
    
});

//Delete tieup company product
router.delete('/product/:product_id',passport.authenticate('jwt', {session: false}),(req,res) => {

    Tieup.findOne({user: req.user.id}).then((company) => {

        const removeProduct = company.product.map(item => item.id).indexOf(req.params.product_id);

        company.product.splice(removeProduct, 1);

        company.productCount = company.productCount - 1;

        company.save().then(() => {
            res.json({success: "Product Deleted"});
        }).catch((err) => {
            res.json(err)
        });

    });


});

//Delete tieup company Data
router.delete('/',passport.authenticate('jwt', {session: false}), (req, res) => {
    Tieup.findOneAndRemove({user: req.user.id}).then((company) => {
        res.json({success: "Tieup Company Data deleted"});
    });
});

module.exports = router;