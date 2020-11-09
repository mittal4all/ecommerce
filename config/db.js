const Sequelize  = require('sequelize');
const sequelize = new Sequelize('ecommerce', 'postgres', 'udie99@@', {
    host: 'localhost',
    dialect:'postgres',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});


module.exports = sequelize;