// /database/models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize.config');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
    await User.sync({});
    console.log('table created');
})();

module.exports = User;
