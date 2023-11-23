const { Model, DataTypes } = require("sequilize");

class Endereco extends Model {
  static init(connection) {
    super.init(
      {
        rua: DataTypes.STRING,
        bairro: DataTypes.STRING,
        estado: DataTypes.STRING,
        cep: DataTypes.NUMBER,
        completo: DataTypes.STRING,
      },
      {
        sequelize: connection,
        schema: "public",
        tableName: "endereços",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        timestamp: true,
        underscore: false,
      }
    );
  }
}
module.exports = Endereco;
