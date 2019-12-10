// Update with your config settings.

// this file contains instructions knex needs to connect to the database.
// each key on the exported object had the configuration for a database environment (dev, production, testing, etc)

module.exports = {
// teached knex to connect to the development database
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, //only needed when using SQLite3
    connection: {
      filename: './data/produce.db3' // where is the database file?
    },
    migrations: {
      directory: './data/migrations' // will be created automatically when you run the command to create it
    },
    seeds: {
      directory: './data/seeds' // will be created automatically when you run the command to create it
    }
  }
};
