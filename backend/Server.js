const express = require ("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const colors = require('colors');

connectDB();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

//Routes configurations
app.use('/api/employee',require('./routes/EmployeeRoutes'));
app.use('/api/customer',require('./routes/CustomerRoute'));

app.listen(PORT,()=> console.log(`Server connected on port ${PORT}`));