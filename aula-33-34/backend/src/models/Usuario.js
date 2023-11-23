const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {
  static init(connection) {
    super.init(
      {
        nome: DataTypes.STRING,
        dataNascimento: DataTypes.NUMBER,
        email: DataTypes.STRING,
        telefone: DataTypes.NUMBER,
      },
      {
        sequelize: connection,
        schema: "public",
        tableName: "movies",
        createdAt: "createdAt",
        updateAt: "updateAt",
      }
    );
  }
}
module.exports = Usuario;
