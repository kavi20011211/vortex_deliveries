const express = require('express')
const router = express.Router()
const {empProtect} = require('../middlewares/empAuthMiddleware')
const {customerRegisterFunc,customerLoginFunc,updateCustomer,deleteCustomer,getCustomer} = require('../controllers/CustomerController')

// Customer Registration
router.post('/',customerRegisterFunc)
// Customer Login
router.post('/login',customerLoginFunc)
// Get Customer
router.get('/me',empProtect,getCustomer)
// Update Customer
router.post('/cus/:id',empProtect,updateCustomer)
// Delete Customer
router.post('/cus/:id',empProtect,deleteCustomer)

module.exports = router;