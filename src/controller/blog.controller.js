const service = require('../services/blog.services');

exports.getAll = async function(req, res) {
    try {
        const blog = await service._getAll(); 

        return res.status(200).json({ title: 'sssss', body: 'ABC'  });

    } catch (error) {

        return res.status(500).json({ message: "", error: error });        
    
    }
};

exports.getById = async function(req, res) {
    try { 

        return res.status(200).json(null);
        
    } catch (error) {
        
        return res.status(500).json({ message: "", error: error });       

    }
};

exports.create = async function(req, res) {
    try {

        return res.status(201).json(req.body);
        
    } catch (error) {
        
        return res.status(500).json({ message: error.message, error: error });     

    }
};

exports.update = async function(req, res) {
    try {
        return res.status(200).json(null);
        
    } catch (error) {
        
        return res.status(500).json({ message: "", error: error });     

    }
}
/*Evaluar la inactividad ya que no se si seria viable borrar ya un suscriptor con cuentas de otros servidores.s */
exports.delete = async function(req, res) { 
    try {

        // const subscriber = await service._delete(req.params.id);
        return res.status(202).json(undefined);
        
    } catch (error) {
        
        return res.status(500).json({ message: "", error: error });     

    }
}