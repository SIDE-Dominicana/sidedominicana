const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `../../environment/${process.env.NODE_ENV}.env`)
});

module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'development',
    HOST : process.env.HOST || 'localhost',
    PORT : process.env.PORT || 443,
    DATABASE_PORT : process.env.DATABASE_PORT || 5432,
    USER: process.env.USER || 'postgres',
    PASSWORD: process.env.PASSWORD || 'cris1234',
    DATABASE : process.env.DATABASE || 'sidedominicana',
    DIALECT : process.env.DIALECT || 'postgres',
    JWT_TOKEN_SECRET : process.env.JWT_TOKEN_SECRET || '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611',
    JWT_EXPIRES_TIME : process.env.JWT_EXPIRES_TIME || '30s',
    JWT_SECRETKEY : process.env.JWT_SECRETKEY || 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3',
    JWT_IV : process.env.JWT_IV || '237f306841bd23a418878792252ff6c8'
}