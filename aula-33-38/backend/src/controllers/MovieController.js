const { connection, Movie } = require("../database/index");

Movie.init(connection);

module.exports = {
  async list(req, res) {
    try {
      const movies = await Movie.findOne({
        where: {
          id: req.params.id,
        },
      });
      return res.json(movies);
    } catch (err) {
      console.error("Erro na busca: ", err);
      return res.status(500).json({ error: "Erro na busca de filmes" });
    }
  },

  async create(req, res) {
    const { title, poster, overview } = req.body;

    try {
      const movie = await Movie.create({
        title,
        poster,
        overview,
      });
      return res.json(movie);
    } catch (err) {
      return console.error("Erro na criação: ", err);
    }
  },
  async show(req, res) {
    try {
      const movie = await Movie.findOne({ where: { id: req.params.id } });
      return res.json(movie);
    } catch (err) {
      console.error("Erro na busca: ", err);
      return res.status(500).json({ error: "Erro na busca" });
    }
  },

  async update(req, res) {
    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;
    const { title, poster, overview } = req.body;
    const id = req.params.id;
    try {
      await Movie.update(
        {
          title,
          poster,
          overview,
        },
        {
          where: {
            id: {
              [Op.eq]: id,
            },
          },
        }
      );

      return res.json({ msg: `Filme ${title} foi atualizado com sucesso!` });
    } catch (err) {
      return res.json({ msg: `Erro ao atualizar o filme ${title}` });
    }
  },

  async delete(req, res) {
    try {
      await Movie.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.json({ msg: `Filme ${title} foi removido com sucesso!` });
    } catch (err) {
      return res.json({ msg: "Erro na exclusão", err });
    }
  },
};
