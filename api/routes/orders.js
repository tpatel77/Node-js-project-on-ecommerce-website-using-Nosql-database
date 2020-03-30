const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
res.status(200).json({
message:'get order'
});
});

router.get('/:orderid',(req,res,next)=>{
    res.status(200).json({
    message:'get order',
    orderid : req.params.orderid

    });
    });

router.post('/',(req,res,next)=>{
    const order = {
        productid : req.body.productid,
        orderid: req.body.quantity
    }
    
    res.status(200).json({
    message:'post order',
    createdorder:order

    });
    });

    router.delete('/',(req,res,next)=>{
        res.status(200).json({
        message:'delete order'
        });
        });

        module.exports = router;