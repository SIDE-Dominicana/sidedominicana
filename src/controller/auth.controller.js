const jwt = require('jsonwebtoken');
const config = require('../config/app.config')
const service = require('../services/auth.services');

exports.login = async function(req, res) {
    try {

        let isUserExist = await service._verifiedUsername(req.body.username);
        
        let User = JSON.parse(JSON.stringify(isUserExist));

        if (isUserExist == null || isUserExist == undefined) return res.status(401).json({ message: "Usuario no existe"});

        let isValidPassword = await service._comparedPassword(User.subscriberId, req.body.password);

        if (!isValidPassword) return res.status(500).json({ message: "Contraseña incorrecta"});

        if (!User.status) return res.status(500).json({ message: "Usuario inactivo" });

        const token = jwt.sign({ user: User.userName, rol: User.rol }, config.JWT_TOKEN_SECRET, { expiresIn: config.JWT_EXPIRES_TIME });

        return res.status(200).json({ user: User, token: token });
        
    } catch (error) {
        
        return res.status(500).json({ message: "", error: error });     

    }
};

exports.resetPassword = async function(req, res) {
    var response = await service.resetPassword();
    return res.send(response);
};