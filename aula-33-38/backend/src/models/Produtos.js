const { Model, DataTypes } = require("sequelize");
const { connection } = require("../database");

class Produto extends Model {
  static init(connection) {
    super.init(
      {
        nome: DataTypes.STRING,
        tipo: DataTypes.STRING,
        preco: DataTypes.NUMBER,
      },
      {
        sequelize: connection,
        schema: "public",
        tableName: "produtos",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        timestamp: true,
        underscore: false,
      }
    );
  }
}

modules.exports = Produto;
