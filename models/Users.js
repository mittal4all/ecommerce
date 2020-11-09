const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Users = sequelize.define("users", {
  user_nam: {
    allowNUll: false,
    type: Sequelize.STRING,
  },
  user_email: {
    allowNUll: false,
    type: Sequelize.STRING,
  },
  user_password: {
    allowNUll: false,
    type: Sequelize.STRING,
  },
  createdAt: {
    field: "created_at",
    type: Sequelize.DATE,
  },
  updatedAt: {
    field: "updated_at",
    type: Sequelize.DATE,
  },
});

module.exports = Users;
