const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model { }

Pet.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // TODO: change datatypes?
        age: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        // TODO: change datatypes
        gender: {
            type: DataTypes.STRING,
        },
        // TODO: change datatypes
        weight: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Pet',
    }
);

module.exports = Pet;
