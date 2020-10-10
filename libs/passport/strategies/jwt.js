const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../../../models/user')

const config = require('config');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: config.get('jwtSecret')
}

module.exports = new JwtStrategy(jwtOptions, async function (payload, done) {

    try{

        const user = await User.findByPk(payload.id)
  
        if (user) {
            return done(null, user)
        } else {
            return done(null, false)
        }

    }catch (err) {
        return done(err)
    }
    
})