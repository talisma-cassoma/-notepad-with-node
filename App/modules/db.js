//conec data base
const Sequelize = require('sequelize')

const sequelize = new Sequelize('postApp', 'root', 'password', {
    host: "localhost", //o sitio onde está hospedado(no meu pc ) 
    dialect: "mysql" //o tipo de DB 
})
//exportar as duas variaveis em forma de obj
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
