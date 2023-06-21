const { Sequelize, DataTypes } = require('sequelize');
const blog = require('../database/database');

const User = blog.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

(async () => {
    await User.sync();
    console.log('Tabela de usuários criada!');
})();

module.exports = User;