const { Sequelize } = require("sequelize")

const blog = new Sequelize('blog','root','maycon',{
    host:'localhost',
    dialect:'mysql',
    logging: false
})

module.exports = blog;