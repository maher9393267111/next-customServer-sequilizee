const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2');
require('dotenv').config();


const option = {
  // host: "mysql-93288-0.cloudclusters.net",
 
  // dialect: "mysql",
  // port: 10016,
  // dialectModule: mysql2

     host: "localhost",
 
   dialect: "mysql",
   port: 3306,
   dialectModule: mysql2

};

// const databaseName = "second";
// const databaseUsername = "admin";
// const databasePassword = "xC8D2L3M";

 const databaseName = "mylocal";
 const databaseUsername = "maheradmin2";
 const databasePassword = "maher9393";



  
const sequelize = new Sequelize(
  databaseName,
  databaseUsername,
  databasePassword,
  option
);

module.exports = sequelize;