const Sequelize = require("sequelize");
const sequelize = new Sequelize("ecommerceDbNode", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});


module.exports = sequelize;
