const express = require('express')
const router = express.Router()
const {empProtect} = require('../middlewares/empAuthMiddleware')
const {employeeRegistrationFunc, employeeLoginFunction, getAllEmployees, getEmployee, getAllDrivers, updateEmployee, deleteEmployee} = require('../controllers/EmployeeController')


//Employee Registration
router.post('/',employeeRegistrationFunc);
//Employee Login
router.post('/login',employeeLoginFunction);
//Get All Employees
router.get('/',empProtect,getAllEmployees);
//Get Employee
router.get('/emp/:id',empProtect, getEmployee);
//Get Drivers Only
router.get('/drvr',empProtect, getAllDrivers);
//Update Employee
router.put('/emp/:id',empProtect, updateEmployee);
//Remove Employee
router.delete('/emp/:id',empProtect, deleteEmployee);

module.exports = router;