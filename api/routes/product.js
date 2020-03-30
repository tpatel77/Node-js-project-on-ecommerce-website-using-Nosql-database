const express = require('express');
const router  = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');


router.get('/',(req,res,next) =>{
    Product.find()
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json({
            doc
        });
    })
    .catch(err =>
        {
            console.log(err);
        })
    
});

router.post('/',(req,res,next) =>{
    

    const product = new Product({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    });
    product.save()
    .then(result =>{
        
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    })

    res.status(200).json({
        message: 'we are in post request',
        createdproduct:product
    });
});

router.get('/:productid',(req,res,next) =>{
    const  id = req.params.productid;
    Product.findById(id)
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json({doc});
    })
    .catch(err =>
        {
            console.log(err);
        });
    
    
});

router.patch('/',(req,res,next) =>{
    res.status(200).json({
        message: 'product updated'
    });
});


router.delete('/:productid',(req,res,next) =>{
    const id = req.params.productid;
    Product.remove({_id:id})
    .exec()
    .then(doc =>{
        console.log("succesfully deleted");
        res.status(200).json({
            message: "successfully deleted"
        });
    })
    .catch(err =>{
        console.log(err);
    })

   
});

module.exports = router;