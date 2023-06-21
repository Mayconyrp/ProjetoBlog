const { Sequelize, DataTypes } = require('sequelize');
const blog = require('../database/database');

const Artigo = blog.define('Artigo', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    Titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    texto: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

(async () => {
    await Artigo.sync();
    console.log('Tabela de usuários criada!');
})();

module.exports = Artigo;