const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sequelize_learn", "root", "", {
  dialect: "mysql",
});
// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("User table synced with the database");
//   })
//   .catch((err) => {
//     console.error("Error syncing User table:", err);
//   });
module.exports = sequelize;
