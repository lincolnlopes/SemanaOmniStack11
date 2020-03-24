const express = require("express");

const routes = express.Router();

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

routes.post("/user", (req, res) => {
  const params = req.query;
  console.log(params);

  return res.json({
    method: "POST",
    mensagem: "Hello World!",
    aluno: "@lincolngyn"
  });
});

module.exports = routes;
