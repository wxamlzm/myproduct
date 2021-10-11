const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('mysql://root:@127.0.0.1:3306/test')

// 数据库连接测试
// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.')
// }catch(error) {
//     console.log('Unable to connect to the database:', error)
// }

module.exports = sequelize

