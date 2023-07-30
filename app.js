//js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const Orders = require('./routes/R_order');
const newLocal = require('custom-env')  
newLocal.env(process.env.NODE_ENV,'./config');

// Mongo DB conncetion
const database = process.env.CONNECTION_STRING || "mongodb://127.0.0.1:27017/proddb";
mongoose.connect(database,
    {useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => console.log("mongo connected"))
    .catch(err => console.log(err));


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


//Routes
app.use('/cart', Orders);
const PORT = process.env.PORT ||  4111;
app.listen(PORT, console.log("Server do start for port: " + PORT))

//module.exports = app;