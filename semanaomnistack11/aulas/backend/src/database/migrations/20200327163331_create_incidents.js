
exports.up = function(knex) {
    knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullablw();

        table.foreign('ong_id').references('id').inTable('ong');
        
    
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  
};
