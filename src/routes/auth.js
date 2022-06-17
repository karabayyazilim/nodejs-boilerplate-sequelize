const router = require('express').Router()
const AuthController = require('../controllers/auth')
const validate = require('../middleware/validate')
const schemas = require('../validations/user')

router.route('/login').post(validate(schemas.loginValidation), AuthController.login)

module.exports = router


