exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.increments("id");
    table.string("title", 40).notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    table.string("ong_id", 8).notNullable();

    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("incidents");
};
