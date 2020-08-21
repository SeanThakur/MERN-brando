const express = require("express");
const router = express.Router();
const passport = require("passport");
//models
const Company = require("../models/Company");
const User = require("../models/User");

//fetching all Data of the companies
router.get('/', (req, res) => {
    Company.find().sort({date: -1}).populate("user").then((company) => {
        res.json(company);
    });
});

//fetching Data of the companies
router.get('/my',passport.authenticate("jwt",{session: false}),(req, res) => {
    User.findOne({_id: req.user.id}).then((company) => {
        if(!company)
        {
            res.status(404).json({company: "UnAuthorized User"});
        }else {
            Company.findOne({user: req.user.id}).populate("user").then((company) => {
                res.json(company);
            });
        }
    });
});

//fetching Data by company name
router.get("/:company_name",(req, res) => {
  Company.findOne({companyName: req.params.company_name}).populate("user").then((company) => {
    res.json(company);
  });
});

//Storing || updating all Data of the companies
router.post("/", passport.authenticate("jwt",{session: false}) ,(req, res) => {

    let companyFields = {};

    companyFields.user = req.user.id
    if(req.body.companyName) companyFields.companyName = req.body.companyName;
    if(req.body.companyType) companyFields.companyType = req.body.companyType;
    if(req.body.discription) companyFields.discription = req.body.discription;
    if(req.body.ownerName) companyFields.ownerName = req.body.ownerName;
    if(req.body.since) companyFields.since = req.body.since;
    if(req.body.images) companyFields.images = req.body.images;

    if(typeof req.body.locatedAt !== 'undefined')
    {
        companyFields.locatedAt = req.body.locatedAt.split(',');
    }

    companyFields.social = {};

    if(req.body.youtube) companyFields.social.youtube = req.body.youtube;
    if(req.body.facebook) companyFields.social.facebook = req.body.facebook;
    if(req.body.instagram) companyFields.social.instagram = req.body.instagram;
    if(req.body.linkedin) companyFields.social.linkedin = req.body.linkedin;
    if(req.body.twitter) companyFields.social.twitter = req.body.twitter;

    Company.findOne({user: req.user.id}).then(company => {

        //if company data is present then update the data or create a new one
        if(company)
        {
            Company.findOneAndUpdate({user: req.user.id},{$set : companyFields},{new: true}).then(updatedData => {
                res.json(updatedData)
            });

        } else {
            
            // Checking if company name is available to use or not 
            Company.findOne({companyName: companyFields.companyName}).then(company => {
                if(company) 
                {
                    res.status(400).json({companyName: "This name is already in use."});
                }else {
                    const newCompany = new Company(companyFields);

                    newCompany.save().then((company) => {
                        res.json(company);
                    });
                }
            });

            
        }
    });

});

//Storing Products Data
router.post("/product",passport.authenticate("jwt",{session: false}),(req, res) => {
  
    Company.findOne({user: req.user.id}).then((company) =>{

        const newProduct = {
            name          :req.body.name,
            discription   :req.body.discription,
            price         :req.body.price,
            images        :req.body.images,
            launchingDate :req.body.launchingDate,
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

//Delete Specific product
router.delete("/product/:product_id", passport.authenticate("jwt",{session: false}),(req,res) => {
    
    Company.findOne({user: req.user.id}).then((company) => {

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

//Delete Entire Model
router.delete("/", passport.authenticate("jwt",{session: false}),(req,res) => {
    User.findOneAndRemove({_id: req.user.id}).then(() => {
        Company.findOneAndRemove({user: req.user.id}).then(() =>{
            res.json({success: "Company Data deleted"});
        });
    });
});

module.exports = router;