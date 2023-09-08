/* eslint-disable linebreak-style */
// model de funcionario
module.exports = (sequelize, DataTypes) => {
    const Funcionario = sequelize.define('Funcionario', {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        ramal: DataTypes.STRING,
        departamento: DataTypes.STRING
    }, {
        tableName: 'funcionarios',
        timestamps: false
    });

    return Funcionario;
};