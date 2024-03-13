const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'votre_secret'; // Changez pour votre clé secrète

module.exports = (passport) => {
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: jwt_payload.id
                }
            });
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            return done(err, false);
        }
    }));
};
