const express = require ("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const colors = require('colors');
// const cors = require('cors');

connectDB();
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//Routes configurations
app.use('/api/employee',require('./routes/EmployeeRoutes'));
app.use('/api/customer',require('./routes/CustomerRoute'));

app.listen(port,()=> console.log(`Server connected on port ${port}`));