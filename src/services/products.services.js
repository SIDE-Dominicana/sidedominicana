const db = require('../config/db.config');

async function _getAll() {
    const allProducts = await db.products.findAll();
    
    return allProducts;
}



async function _create(product) {    
    
    // const createBlog = await db.blog.create({
    // });

    return product; 
}

async function _update(id, product) {

    // const updateBlog =  await db.subscribers.update({
    // },
    // {
    //     where: {
    //         blogId: id
    //     }
    // });

    return product;
}

async function _delete(id) {
    // const deleteSubscriber = await db.subscribers.destroy({
    //     where: {
    //         subscriberId: id
    //     }
    // });
    
    return null;
}

module.exports = {
    _getAll,
    _getById,
    _create,
    _update,
    _delete
}