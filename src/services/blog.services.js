const db = require('../config/db.config');

async function _getAll() {
    const allBlogs = await db.blog.findAll();
    
    return allBlogs;
}

async function _getById(id) {
    const Subscriber = await db.subscribers.findByPk(id);

    return Subscriber;
}

async function _create(blog) {    
    
    // const createBlog = await db.blog.create({
    // });

    return blog; 
}

async function _update(id, blog) {

    // const updateBlog =  await db.subscribers.update({
    // },
    // {
    //     where: {
    //         blogId: id
    //     }
    // });

    return blog;
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