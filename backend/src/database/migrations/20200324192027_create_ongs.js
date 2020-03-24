exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary();
    table.string("name", 60).notNullable();
    table.string("email", 100).notNullable();
    table.string("whatsapp", 20).notNullable();
    table.string("city", 30).notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("ongs");
};
