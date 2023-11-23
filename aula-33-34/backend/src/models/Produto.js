const { Model, DataType } = require("sequelize");

class Produto extends Model {
  static init(connection) {
    super.init(
      {
        nome: DataType.STRING,
        preco: Datatype.NUMBERT,
        descricao: DataType.STRING,
      },
      {
        sequelize: "connection",
        schema: "public",
        tableName: "movies",
        createdAt: "createdAt",
        updateAt: "updateAt",
        timestamp: true,
        unuderscore: false,
      }
    );
  }
}
module.exports = Produto;
