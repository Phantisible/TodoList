const {DataTypes} = require("sequelize");
const db = require("../database/database");

const accounts = db.sequelize.define("accounts",{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
        },
        uuid:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "accounts"
 });

 exports.model = accounts;