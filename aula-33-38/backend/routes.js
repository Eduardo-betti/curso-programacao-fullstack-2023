const express = require("express");
const MovieController = require("./src/controllers/MovieController");

const routes = express.Router();

routes.get("/movie", MovieController.list);
routes.get("/movie/:id", MovieController.show);
routes.post("./movie", MovieController.create);
routes.delete("./movie", MovieController.delete);
routes.put("./movie", MovieController.update);

module.exports = routes;
