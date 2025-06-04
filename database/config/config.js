require('dotenv').config();
module.exports = {
  "development": {
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    "host": "postgres",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    "host": "localhost",
    "dialect": "postgres"
  }
}
