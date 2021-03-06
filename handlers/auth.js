const passport = require('../libs/passport');

exports.init = app => app.use((req, res, next) => {

    passport.authenticate('jwt', function (err, { dataValues: user }){

        req.isAuthenticated = user ? true : false

        if(req.isAuthenticated){

            const { id, login, role, tariff, fullName } = user

            req.user = { id, login, role, tariff, fullName }

        }

        next()

    })(req, res, next)

})
