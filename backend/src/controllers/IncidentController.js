const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const [count] = await connection("incidents").count("id as count");
    //console.log(count["count"]);

    //const count = await connection("incidents").count("id as count");
    const incidents = await connection("incidents")
      .limit(5)
      .offset((page - 1) * 5)
      .select("*");

    //res.header("X-Total-Count", count[0].count);
    res.header("X-Total-Count", count["count"]);
    //return res.json({ incidents, ...count[0] });
    return res.json({ incidents, ...count });
  },

  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;
    console.log({ title, description, value, ong_id });
    //const id = result[0]
    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json({ id });
  },
  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    //Não funciona sem ser async ==> PQ?
    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: "Operation not permitted" });
    }

    await connection("incidents")
      .where("id", id)
      .delete();

    res.status(204).send();
  }
};
