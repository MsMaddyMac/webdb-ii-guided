// a migration file describes the changes to apply to the database

// the "up" function describes what will be done
exports.up = function(knex) {
  // ALWAYS RETURN THE CALL TO KNEX.SCHEMA
  return knex.schema.createTable('veggies', tbl => {
    // primary key, called 'id', an integer, auto-increments
    // you want the id to be called something different, pass it in tbl.increments('veggie_id'). If not, 'id' is the default.
    tbl.increments(); 

    // this will create a column named 'name' and 255 is the max characters the 'name' can have (this is optional). 
    tbl.string('name', 255)
        .notNullable() // can't leave the name out, required.
        .unique() // '.unique()' is a constraint (rules we define to protect against invalid data).
        .index(); // makes searching for vegetables using this column faster

    tbl.boolean('like_it')
        .defaultTo(false); // in the database true is 1 and false is 0. You can write either one and it will be translated.
  })
};

// the "down" function describes how to revert the changes (like undo for the schema)
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('veggies'); // you can use .dropTable or .dropTableIfExists
};
