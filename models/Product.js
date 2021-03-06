const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("Product", {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        url: {
            type: Sequelize.STRING,
        },
    }, { timestamps: false });
    model.associate = (models) =>{
    }
    return model;
};