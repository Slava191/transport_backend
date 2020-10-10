require('dotenv').config()
const path = require('path');

module.exports = {
  secret: process.env.SECRET || 'mysecret',
  jwtSecret: process.env.JWTSECRET || 'mysecretkey12345',
  root: process.cwd(),
  sequalize: {
    database: "transport",
    login: "root",
    password: ""
  },
  mysql: {
    dialect: "mysql",
    host: "localhost",
    port: 3307
  },
  server: {
    host: 'http://localhost',
    runningMode: process.env.NODE_ENV || 'development',
    port: 3001
  }
};