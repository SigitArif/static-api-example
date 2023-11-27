const sequelize = require("sequelize");

const connection = new sequelize.Sequelize('railway', 'root', 'orFj3DlDY5snFiZtdrb4', {
    host: 'containers-us-west-95.railway.app',
    dialect: 'mysql',
    port: 6719
  });

module.exports = connection;