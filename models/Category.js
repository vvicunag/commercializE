const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);



// async function runCategory() {
//  try {
//     await sequelize.sync({force: true});
//     console.log("Connected and initialised DB");
//     const book = await Book.create({
//       name: "Book",
//       author: "John"
//     });
//     console.log("created book", book.dataValues); 
//   } catch (err) {
//     console.log("Something went wrong");
//   }
// }

module.exports = Category;
