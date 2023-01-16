const jwt = require('jsonwebtoken');
const config = require('../config/app.config');
const { products } = require('../config/db.config');
const product = require('../services/products.services');

exports.getAll = async function(req, res) {
    try {

        let token = req.headers['authorization']; 
    
        if (token == null) return res.status(403).json({ message: "No token provided!"});

        const verified = jwt.verify(token, config.JWT_TOKEN_SECRET);

        const products = await product._getAll(); 

        return res.status(200).json(products);

    } catch (error) {

        return res.status(500).json({ message: "Acceso Denegado", error: error });        
    
    }
};

exports.getById = async function(req, res) {
    try {

        const products = await product._getById(req.params.id);    
        return res.status(200).json(products);
        
    } catch (error) {
        
        return res.status(500).json({ message: "", error: error });       

    }
};

exports.create = async function(req, res) {
    try {

        const products = await product._create(req.body);
        return res.status(201).json(products);
        
    } catch (error) {
        
        return res.status(500).json({ message: "", error: error });     

    }
};

exports.update = async function(req, res) {
    try {

        const products = await product._update(req.params.id, req.body);
        return res.status(200).json(products);
        
    } catch (error) {
        
        return res.status(500).json({ message: "", error: error });     

    }
}
/*Evaluar la inactividad ya que no se si seria viable borrar ya un suscriptor con cuentas de otros servidores.s */
exports.delete = async function(req, res) { 
    try {

        const products = await product._delete(req.params.id);
        return res.status(202).json(products);
        
    } catch (error) {
        
        return res.status(500).json({ message: "", error: error });     

    }
}