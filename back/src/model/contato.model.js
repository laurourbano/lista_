/* eslint-disable linebreak-style */
// model de contato

module.exports = (sequelize, DataTypes) => {
    const Contato = sequelize.define('Contato', {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        celular: DataTypes.STRING,
        departamento: DataTypes.STRING
    }, {
        tableName: 'contatos',
        timestamps: false
    });

    return Contato;
};