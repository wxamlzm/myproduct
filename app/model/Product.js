const sequelize = require('../config/sequelize')
const { DataTypes } = require('sequelize')
// 创建模型
// const Pet = sequelize.define('Pet', {
//     id: {
//         type:DataTypes.STRING,
//         primaryKey: true
//     },
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type: DataTypes.STRING
//         // allowNull 默认为true
//     }
// },{
//     timestamps: false
// });

const Product = sequelize.define('Product', {
    pid: {
        type: DataTypes.NUMBER,
        primaryKey:true
    },
    pname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    category_id: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
},{
    timestamps: false
})

module.exports = Product