// /datebase/sequelize.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('next05', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port:'3307',
  dialectModule: require('mysql2')
});

try{
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
}catch(err){
    console.error("unable to connect to database")
}


module.exports = sequelize;
