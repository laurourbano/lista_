/* eslint-disable linebreak-style */
// model de contato

module.exports = (sequelize, DataTypes) => {
    const Departamento = sequelize.define('Departamento', {
        nome: DataTypes.STRING,
    }, {
        tableName: 'departamentos',
        timestamps: false
    });

    return Departamento;
};