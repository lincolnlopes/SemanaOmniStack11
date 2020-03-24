exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.increments("id");
    table.string("title", 60).notNullable();
    table.string("description").notNullable();
    table.decimal("valule", 20).notNullable();

    table.string("ong_id", 2).notNullable();

    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("incidents");
};
