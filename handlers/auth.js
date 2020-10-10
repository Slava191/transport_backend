const passport = require('../libs/passport');

exports.init = app => app.use(async (req, res, next) => {

    await passport.authenticate('jwt', function (err, { dataValues: user }){

        req.isAuthenticated = user ? true : false

        if(req.isAuthenticated){

            const {id, login} = user

            req.user = { id, login }

        }

    })(req, res, next)

    await next()

})