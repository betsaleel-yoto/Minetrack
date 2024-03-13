module.exports = function authenticateJWT(req, res, next) {
  passport.authenticate('local', async (err, user, info) => {
    try {
        if (err || !user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        // Génération le JWT
        const token = jwt.sign({
            matricule: user.matriculationNumber,
            role: user.role
        }, 'zehfgueurfyerfieuyfui', { expiresIn: '1h' });

        return res.json({ token });
    } catch (error) {
        return next(error);
    }
})(req, res, next);
};
