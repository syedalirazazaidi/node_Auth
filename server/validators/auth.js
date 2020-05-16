const {check} = require('express-validator')
 exports.userRegisterValidator=[
    check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required'),
    check('email')
    .isEmail()
    .withMessage('email be a valid email address'),
    check('password')
    .isLength({min:6})
    .withMessage('password must be atleast 6 cheracter long')
]
