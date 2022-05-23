const jwt = require('jsonwebtoken');
const config = require('../../config.json');
const service = require('../services/subscribers.services');

exports.getAll = async function(req, res) {
    try {

        let token = req.headers['authorization']; 
    
        if (token == null) return res.status(403).json({ message: "No token provided!"});

        const verified = jwt.verify(token, config.JWT.TOKEN_SECRET);

        console.log(verified);

        const subscribers = await service._getAll(); 

        return res.status(200).json(subscribers);

    } catch (error) {

        return res.status(500).json({ message: "Acceso Denegado", error: error });        
    
    }        
};

exports.getById = async function(req, res) {
    try {

        const subscriber = await service._getById(req.params.id);    
        return res.status(200).json(subscriber);
        
    } catch (error) {
        
        return res.status(500).json({ message: "", error: error });       

    }
};

exports.create = async function(req, res) {
    try {

        const subscriber = await service._create(req.body);
        return res.status(201).json(subscriber);
        
    } catch (error) {
        
        return res.status(500).json({ message: "", error: error });     

    }
};

exports.update = async function(req, res) {
    try {

        const subscriber = await service._update(req.params.id, req.body);
        return res.status(200).json(subscriber);
        
    } catch (error) {
        
        return res.status(500).json({ message: "", error: error });     

    }
}

exports.delete = async function(req, res) {
    try {

        const subscriber = await service._delete(req.params.id);
        return res.status(202).json(subscriber);
        
    } catch (error) {
        
        return res.status(500).json({ message: "", error: error });     

    }
}