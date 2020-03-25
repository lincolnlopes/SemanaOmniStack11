const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },

  async delete(req, res) {
    const { id } = req.params;
    const { ong_id } = req.headers.authorization;

    //Não funciona sem ser async ==> PQ?
    await connection("ongs")
      .where("id", id)
      .delete();

    return res.json({ id });
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    //Não funciona sem ser async ==> PQ?
    await connection("ongs").insert({ id, name, email, whatsapp, city, uf });

    return res.json({ id });
  }
};
