const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const ShopingCart = sequelize.define("shoping_carts", {
  // id:{
  //     type:Sequelize.INTEGER,
  //     primaryKey: true,
  //     allowNUll:false
  // },
  product_name: {
    allowNUll: false,
    type: Sequelize.STRING,
  },
  product_price: {
    allowNUll: false,
    type: Sequelize.INTEGER,
  },
  product_description: {
    allowNUll: false,
    type: Sequelize.STRING,
  },
  product_image: {
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

module.exports = ShopingCart;
