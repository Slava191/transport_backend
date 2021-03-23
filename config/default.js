require('dotenv').config()
const path = require('path');

module.exports = {
  secret: process.env.SECRET,
  jwtSecret: process.env.JWTSECRET,
  root: process.cwd(),
  sequalize: {
    database: process.env.DATABASE,
    login: process.env.DATABASE_LOGIN,
    password: process.env.DATABASE_PASSWORD
  },
  mssql: {
    dialect: "mssql",
    host: "localhost",
    port: 1433
  },
  server: {
    host: process.env.SERVER_HOST,
    runningMode: process.env.NODE_ENV,
    port: process.env.SERVER_PORT
  }
};