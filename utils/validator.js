const { check } = require('express-validator');
 
exports.createTeamValidation = [
    check('name', 'Name is requied').not().isEmpty(),
    check('dateCreated', 'Please include a valid date').isISO8601().toDate(),
    check('league', 'Password must be 6 or more characters').isIn(['Premier League', 'LaLiga', 'Bundesliga', 'League 1', 'Liga NOS', 'Serie A', 'Brasileirao'])
]
 
exports.loginValidation = [
     check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
     check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
 
]