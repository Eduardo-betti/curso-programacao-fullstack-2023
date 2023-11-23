const { Model, DataTypes, Sequelize } = require("sequelize");

class Movie extends Model {
  static init(connection) {
    super.init(
      {
        title: DataTypes.STRING,
        poster: DataTypes.STRING,
        overvieze: DataTypes.TEXT,
      },
      {
        sequelize: connection,
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
module.exports = Movie;
