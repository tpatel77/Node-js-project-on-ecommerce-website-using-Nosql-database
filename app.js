const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://tejas:tejas@tejas-icsot.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
  }).then(() => console.log('DB connnection successful!'));



const productsRoutes = require('./api/routes/product.js');
const orderRoutes = require('./api/routes/orders.js');

app.use(morgan('dev'));
//here we are  in the app file

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/products',productsRoutes);
app.use('/orders',orderRoutes);

app.use((req,res,next) =>{
    const error = new Error('Not found');
    error.status(404);
    next(error);
})
app.use((error,req,res,next) =>{
    res.status(error.status||500);
    res.json({

        error :
        {
            message:error.message
        }
    });
});



module.exports = app;
