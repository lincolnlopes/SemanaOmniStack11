const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();
/*
routes.get("/user/:idade", (req, res) => {
  const queryParams = req.query;
  const routeParams = req.params;
  const requestBody = req.body;

  console.log(queryParams);
  console.log(routeParams);
  console.log(requestBody);

  return res.json({
    method: "GET",
    mensagem: "Hello World!",
    aluno: "@lincolngyn"
  });
});
*/

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);
routes.delete("/ongs/:id", OngController.delete);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/sessions", SessionController.create);

routes.get("/profile", ProfileController.index);
module.exports = routes;
