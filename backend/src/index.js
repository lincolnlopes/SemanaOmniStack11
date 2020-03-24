const express = require("express");

const app = express();

app.use(express.json());

app.get("/user/:idade", (req, res) => {
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

app.post("/user", (req, res) => {
  const params = req.query;
  console.log(params);

  return res.json({
    method: "POST",
    mensagem: "Hello World!",
    aluno: "@lincolngyn"
  });
});

app.listen(3000);
