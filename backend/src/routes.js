const express = require("express");
const crypto = require("crypto");

const connection = require("./database/connection");

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
routes.get("/ongs", async (req, res) => {
  const ongs = await connection("ongs").select("*");
  return res.json(ongs);
});

routes.post("/ongs", async (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body;

  const id = crypto.randomBytes(4).toString("HEX");
  //console.log(req.body, id);

  //Não funciona sem ser async ==> Poquê?
  await connection("ongs").insert({ id, name, email, whatsapp, city, uf });

  return res.json({ id });
});

module.exports = routes;
